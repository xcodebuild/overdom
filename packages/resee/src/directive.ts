import { schedule } from './batcher';
import { computed, reactive, ReactiveHandler } from './reactive';
import { Fragment, FragmentList } from './fragment';

export function directive<T extends () => Fragment>(func: T) {
  // @ts-ignore
  func.__isdirective__ = true;
  return func;
}

export function isDirective(val: any) {
  return val?.__isdirective__;
}

export function $if(
  cond: () => boolean,
  yes: () => Fragment,
  no: () => Fragment
) {
  return directive(() => {
    const reactiveResult = computed(cond);
    let lastResult = reactiveResult();
    let lastFragment = lastResult ? yes() : no();

    reactiveResult.subscribe(() => {
      const newResult = reactiveResult();
      if (lastResult !== newResult) {
        const newFragment = newResult ? yes() : no();
        schedule(() => {
          lastFragment.replaceWith(newFragment);
          lastFragment = newFragment;
        });
        lastResult = newResult;
      }
    });

    return lastFragment;
  });
}

type ItemOfReactiveList<T> = T extends () => (infer I)[] ? I : T;
export function $map<T>(
  list: T,
  mapFunc: (
    item: ReactiveHandler<ItemOfReactiveList<T>>,
    index: ReactiveHandler<number>
  ) => Fragment,
  keyFunc: (
    item: ReactiveHandler<ItemOfReactiveList<T>>,
    index: ReactiveHandler<number>
  ) => string | number
) {
  const reactiveList = (list as unknown) as ReactiveHandler<
    ItemOfReactiveList<T>[]
  >;
  const listData = reactiveList();

  let lastReactiveItems: ReactiveHandler<
    ItemOfReactiveList<T>
  >[] = (listData.map(item => {
    return reactive((item as unknown) as any);
  }) as unknown) as ReactiveHandler<ItemOfReactiveList<T>>[];

  let lastReactiveIndexs: ReactiveHandler<number>[] = listData.map((_, index) =>
    reactive(index)
  );

  const fragmentList = new FragmentList();

  const mapFuncWrap = (
    item: ReactiveHandler<ItemOfReactiveList<T>>,
    index: ReactiveHandler<number>
  ) => {
    const fragment = mapFunc(item, index);
    fragment.reactiveItem = item;
    fragment.reactiveIndex = index;
    return fragment;
  };

  const keyFuncWrap = (
    item: ReactiveHandler<ItemOfReactiveList<T>>,
    index: ReactiveHandler<number>
  ) => {
    const r = keyFunc(item, index);
    if (typeof r !== 'string' && typeof r !== 'number') {
      console.trace('key of $map should return string or number, but got ' + r, keyFunc.toString());
    }
    return r;
  }

  let lastFragments = listData.map((_, index) =>
    mapFuncWrap(lastReactiveItems[index], lastReactiveIndexs[index])
  );
  let lastKeys = listData.map((_, index) =>
    keyFuncWrap(lastReactiveItems[index], lastReactiveIndexs[index])
  );

  lastFragments.forEach((frag, index) => {
    fragmentList.appendFragment(frag, lastKeys[index]);
  });

  reactiveList.subscribe(() => {
    const newList = reactiveList();
    const newKeys = newList.map((item, index) =>
      // @ts-ignore
      keyFuncWrap(reactive(item), reactive(index))
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
        // @ts-ignore
        const reactiveItem = reactive(newList[index]);
        const reactiveIndex = reactive(index);
        const fragment = mapFuncWrap(reactiveItem as any, reactiveIndex);

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
    fragmentList.childFragments.forEach((child, index) => child!.reactiveIndex!(index));
  });

  return fragmentList;
}
