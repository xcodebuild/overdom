const RefSymbol = Symbol('ref');
const InternalRawSymbol = Symbol('internal_raw');

export function isRef<T>(r: Ref<T> | unknown): r is Ref<T>;
export function isRef(r: any): r is Ref {
  return r && (r as Ref)[RefSymbol] === true;
}

export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}

type Key = string | symbol | number;

let hideRefMode = false;

export function wrapFnHideRefMode<T extends Function>(fn: T) {
  return (function(...args: any[]) {
    hideRefMode = true;
    const r = fn(...args);
    hideRefMode = false;
    return r;
  } as unknown) as T;
}

const proxyObjMap = new WeakMap<Object, Object>();

class DepsManager {
  private _collecting: TriggerableRef[] = [];
  private _deps = new WeakMap<Ref, Set<TriggerableRef>>();

  private _addDep(target: Ref, trigger: TriggerableRef) {
    if (!this._deps.has(target)) {
      this._deps.set(target, new Set());
    }
    this._deps.get(target)!.add(trigger);
  }

  private _getDeps(target: Ref) {
    return Array.from(this._deps.get(target)?.values() || []);
  }

  beginCollect(ref: TriggerableRef) {
    this._collecting.push(ref);
  }

  endCollect() {
    this._collecting.pop();
  }

  track(target: Ref) {
    if (this._collecting.length > 0) {
      this._addDep(target, this._collecting[this._collecting.length - 1]);
    }
  }

  trigger(target: Ref) {
    const deps = this._getDeps(target);
    deps.forEach(dep => dep.trigger());
  }
}

const depsManager = new DepsManager();

export interface Ref<T = any> {
  [RefSymbol]: boolean;
  value: T;
}

interface TriggerableRef<T = any> {
  [RefSymbol]: boolean;
  value: T;
  trigger: () => void;
}

export function raw(ref: Ref) {
  if (isProxyRef(ref)) {
    // @ts-ignore
    return ref[InternalRawSymbol];
  }
  // @ts-ignore
  return ref._value;
}

export type NoTrackFn = (fn: () => void) => void;

class AutorunRefImpl {
  [RefSymbol] = true;
  value = null;

  constructor(private _fn: (notrackFn: NoTrackFn) => void) {
    this._run();
  }

  private _run() {
    depsManager.beginCollect(this);
    // @ts-ignore
    wrapFnHideRefMode(this._fn).call(this, (fn: () => void) => {
      // no track fn
      depsManager.endCollect();
      fn();
      depsManager.beginCollect(this);
    });
    depsManager.endCollect();
  }

  trigger() {
    this._run();
  }
}

export function autorun(fn: (notrackFn: NoTrackFn) => void) {
  return new AutorunRefImpl(fn);
}

class RefImpl<T = any> {
  public [RefSymbol] = true;

  constructor(private _value: T) {}

  get value() {
    depsManager.track(this);
    return this._value;
  }

  set value(val: T) {
    if (this._value !== val) {
      this._value = val;
      depsManager.trigger(this);
    }
  }
}

class ComputedRefImpl<T = any> {
  public [RefSymbol] = true;
  private inited = false;
  private _value!: T;
  private _compute: () => T;

  constructor(getter: () => T) {
    this._compute = getter;
  }

  private _recompute() {
    depsManager.beginCollect(this);
    this._value = this._compute();
    depsManager.endCollect();
  }

  get value() {
    if (!this.inited) {
      this._recompute();
      this.inited = true;
    }
    depsManager.track(this);
    return this._value;
  }

  trigger() {
    this._recompute();
    depsManager.trigger(this);
  }
}

const ProxyRefSymbol = Symbol('proxy-ref');

function isProxyRef(target: unknown) {
  return target && (target as ProxyRefImpl<any>)[ProxyRefSymbol] === true;
}

const proxyMap = new WeakMap<Object, Object>();

export function reactive<T extends Record<string, any>>(obj: T): T {
  const ref = new ProxyRefImpl(obj);
  return ref.value;
}

class ProxyRefImpl<T extends object = any> {
  public [RefSymbol] = true;
  public [ProxyRefSymbol] = true;

  private _proxy: T;

  constructor(obj: T) {
    this._proxy = this._initProxy(obj);
  }

  private _initProxy(obj: T): T {
    const that = this;
    if (proxyMap.has(obj)) {
      return proxyMap.get(obj) as T;
    }

    const refMap = new Map<Key, Ref>();

    const proxy = new Proxy(obj, {
      get(_, key) {
        depsManager.track(that);

        if (Array.isArray(obj)) {
          if (key === 'length') return obj.length;
          if (key === 'map')
            return function map(
              cb: (item: any, index: any) => any,
              thisArg?: any
            ) {
              return obj.map((_item: any, _index: any) => {
                return cb((proxy as any)[_index], _index);
              }, thisArg);
            };

          if (
            ['push', 'pop', 'shift', 'unshift', 'splice'].indexOf(
              key as string
            ) !== -1
          )
            return function(...args: any[]) {
              if (key === 'pop') {
                const len = obj.length;
                refMap.delete(len - 1);
              } else if (key === 'splice') {
                const index = args[0];
                const count = args[1];
                const len = obj.length;

                for (let i = 0; i < len; i++) {
                  if (i >= index && i < index + count) {
                    refMap.delete('' + i);
                  } else if (i >= index + count) {
                    refMap.set('' + (i - count), refMap.get('' + i)!);
                    refMap.delete('' + i);
                  }
                }
              }
              obj[key as any](...args);
              depsManager.trigger(that);
            };
        }

        if (key === Symbol.species) {
          return this;
        }
        const ref = getRef(key);
        if (isProxyRef(ref)) {
          return ref.value;
        }
        if (hideRefMode) {
          return ref.value;
        }
        return getRef(key);
      },
      set(_, key, value) {
        depsManager.trigger(that);
        getRef(key)!.value = value;
        return true;
      },
    });

    function getRef(key: Key): Ref {
      if (refMap.has(key)) {
        return refMap.get(key)!;
      }
      const getter = Object.getOwnPropertyDescriptor(obj, key)?.get;
      const value = () => (obj as any)[key];

      let result: Ref;
      if (getter) {
        // computed
        result = new ComputedRefImpl(wrapFnHideRefMode(getter));
      } else if (isRef(value())) {
        result = value();
      } else if (value() !== null && typeof value() === 'object') {
        // reactive object
        result = new ProxyRefImpl(reactive(value()));
      } else if (value() === 'function') {
        result = new RefImpl(wrapFnHideRefMode(value()));
      } else {
        // ref
        result = new RefImpl(value());
      }

      refMap.set(key, result);

      return result;
    }

    proxyMap.set(obj, proxy);
    proxyObjMap.set(proxy, obj);
    return proxy;
  }

  get value() {
    depsManager.track(this);
    return this._proxy;
  }

  set value(newVal) {
    Object.keys(newVal).forEach(key => {
      (this._proxy as any)[key] = (newVal as any)[key];
    });
    depsManager.trigger(this);
  }
}

export function run(fn: () => void) {
  wrapFnHideRefMode(fn)();
}
