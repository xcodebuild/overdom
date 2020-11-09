const noop = () => {};

export type ReactiveHandler<T> = ((newValue?: T) => T) &
  {
    [K in keyof T]: ReactiveHandler<T[K]>;
  } & {
    __internal_reactive__: Reactive<T>;
    unsubscribe: Reactive<T>['unsubscribe'];
    subscribe: Reactive<T>['subscribe'];
  };

type Key = string | number;

type Tracker = (args: {
  unsubscribe: () => void;
  remapKeys: (keyMap: Record<Key, Key>) => void;
}) => void;

const computedTrackerFns: Tracker[] = [];

type UnReactiveTypeOf<T> = T extends () => infer I ? I : T;

export function unReactive<T>(handler: T) {
  return isReactive(handler)
    ? (((handler as unknown) as ReactiveHandler<
        any
      >).__internal_reactive__.selector() as UnReactiveTypeOf<T>)
    : handler;
}

class Reactive<T extends Object> {
  selector: () => T;
  setter: (val: T) => void;

  handler: ReactiveHandler<T>;
  trackers: Set<Tracker> = new Set();
  childs = new Map<Key, ReactiveHandler<T>>();

  unsubscribe = (tracker: Tracker) => {
    this.trackers.delete(tracker);
  };

  subscribe = (tracker: Tracker) => {
    this.trackers.add(tracker);
  };

  trigger() {
    const trackers = Array.from(this.trackers.values());
    trackers.forEach(tracker =>
      tracker({
        unsubscribe: () => this.unsubscribe(tracker),
        remapKeys: (keyMap: Record<Key, Key>) => {
          Object.keys(keyMap).forEach(key => {
            const nextKey = keyMap[key];
            const child = this.childs.get(key);
            if (child) {
              child.__internal_reactive__.selector = () => {
                // @ts-ignore
                return this.selector()[nextKey];
              };
              this.childs.set(nextKey, child);
              this.childs.delete(key);
            }
          });
        },
      })
    );

    this.childs.forEach(child => child.__internal_reactive__.trigger());
  }

  constructor(baseSelector: () => T, baseSetter: (val: T) => void) {
    this.selector = baseSelector;
    this.setter = baseSetter;

    this.handler = (new Proxy(noop, {
      get: (_, key: string) => {
        if (key === '__internal_reactive__') {
          return this;
        } else if (key === 'subscribe' || key === 'unsubscribe') {
          return this[key];
        }
        if (this.childs.has(key)) {
          return this.childs.get(key);
        }
        // @ts-ignore
        const nextSelector = () => this.selector()[key];
        const nextSetter = (val: any) => {
          this.setter({
            ...this.selector(),
            [key]: val,
          });
        };

        const child = new Reactive(nextSelector, nextSetter).get();
        this.childs.set(key, child);
        return child;
      },
      apply: (_, __, args) => {
        if (args.length === 0) {
          if (computedTrackerFns.length > 0) {
            this.subscribe(computedTrackerFns[computedTrackerFns.length - 1]);
          }
          return this.selector();
        }
        // set
        this.setter(args[0]);
        this.trigger();
        return this.selector();
      },
    }) as unknown) as ReactiveHandler<T>;
  }

  get() {
    return this.handler;
  }
}

export function reactive<T extends Object>(initalState: T) {
  if (isReactive(initalState)) {
    return initalState as unknown as ReactiveHandler<UnReactiveTypeOf<T>>;
  }
  let state = initalState;
  return new Reactive(
    () => {
      return state;
    },
    (newValue: T) => {
      state = newValue;
    }
  ).get() as unknown as ReactiveHandler<UnReactiveTypeOf<T>>;
}

export function isReactive(target: unknown) {
  return target && (target as ReactiveHandler<unknown>).__internal_reactive__
    ? true
    : false;
}

/**
 * Reactive functions
 * const a = reactive(1);
 * Use a function to build a reactive value based on compute of another reactive value
 * const b = reactive(() => a() * 4);
 * @param reactiveFn
 */
export function computed<T>(reactiveFn: () => T) {
  let state: ReactiveHandler<T>;

  const compute = () => {
    computedTrackerFns.push(tracker);
    // first time compute
    const value = reactiveFn();
    computedTrackerFns.pop();
    return value;
  };
  const tracker: Tracker = options => {
    // changed
    // remove old tracker
    options.unsubscribe();

    // recompute
    const value = compute();
    state(value as any);
  };

  const initalValue = compute();
  // @ts-ignore
  state = reactive(initalValue);
  return state;
}
