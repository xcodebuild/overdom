import { schedule } from './batcher';
import { Fragment, FragmentList } from './fragment';
import { autorun, reactive, Ref, wrapFnHideRefMode } from './reactive';

export function directive<T extends () => Fragment>(func: T) {
  // @ts-ignore
  func.__isdirective__ = true;
  return func;
}

export function isDirective(val: any) {
  return val?.__isdirective__ === true;
}

export function $if(
  cond: () => boolean,
  yes: () => Fragment,
  no: () => Fragment
) {
  return directive(() => {
    let lastResult: boolean;
    let inited = false;
    let lastFragment: Fragment;

    autorun(() => {
      const newResult = cond();
      if (!inited) {
        lastResult = newResult;
        lastFragment = lastResult! ? yes() : no();
        inited = true;
        return;
      }

      const newFragment = newResult ? yes() : no();
      schedule(() => {
        lastFragment.replaceWith(newFragment);
        lastFragment = newFragment;
      });
      lastResult = newResult;
    });

    return lastFragment!;
  });
}

function createReactiveItem<T>(value: T, index: number) {
  return reactive({
    value,
    index,
  });
}

export type ReactiveItem<T> = {
  value: T;
  index: number;
};

export function $map<T>(
  rawList: T[],
  mapFunc: (item: ReactiveItem<T>) => Fragment,
  keyFunc: (item: ReactiveItem<T>) => string | number
) {
  const list = (rawList as any) as Ref;
  const listData = (list as any) as T[];

  let lastReactiveItems = listData.map((item, index) => {
    return createReactiveItem(item, index);
  });

  const fragmentList = new FragmentList();

  const mapFuncWrap = wrapFnHideRefMode((item: ReactiveItem<T>) => {
    const fragment = mapFunc(item);
    fragment.reactiveItem = item;
    return fragment;
  });

  const keyFuncWrap = wrapFnHideRefMode((item: ReactiveItem<T>) => {
    const r = keyFunc(item);
    if (typeof r !== 'string' && typeof r !== 'number') {
      console.trace(
        'key of $map should return string or number, but got ' + r,
        keyFunc.toString()
      );
    }
    return r;
  });

  let lastFragments = listData.map((_, index) =>
    mapFuncWrap(lastReactiveItems[index])
  );
  let lastKeys = listData.map((_, index) =>
    keyFuncWrap(lastReactiveItems[index])
  );

  lastFragments.forEach((frag, index) => {
    fragmentList.appendFragment(frag, lastKeys[index]);
  });

  let inited = false;

  autorun(notrack => {
    if (!inited) {
      // @ts-ignore
      inited = list.length;
      inited = true;
      return;
    }

    const newList = (list as unknown) as any[];

    notrack(() => {
      const newKeys = newList.map((item, index) =>
        keyFuncWrap(createReactiveItem(item, index))
      );

      const lastKeys = fragmentList.childFragments.map(item => item.key!);

      // diff and patch from keys
      newKeys.forEach((key, index) => {
        const lastKeys = fragmentList.childFragments.map(item => item.key!);
        const lastIndex = lastKeys.indexOf(key);
        if (lastIndex === -1) {
          // insert
          // can not find in old list, mean insert
          // insert to current index
          const reactiveItem = createReactiveItem(newList[index], index);

          const fragment = mapFuncWrap(reactiveItem);

          fragmentList.insert(index, fragment, key);
        } else if (lastIndex !== index) {
          // move

          const fromIndex = lastIndex;
          const toIndex = index;

          fragmentList.move(fromIndex, toIndex);
        }
      });

      const removed = lastKeys.filter(key => newKeys.indexOf(key) === -1);
      fragmentList.removeWithKeys(removed);

      // apply new reactiveIndex
      fragmentList.childFragments.forEach(
        (child, index) => (child!.reactiveItem!.index = index)
      );
    });
  });

  return fragmentList;
}
