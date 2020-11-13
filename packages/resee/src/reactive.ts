import { Fragment } from './fragment';

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
    let temp = hideRefMode;
    hideRefMode = true;
    const r = fn(...args);
    hideRefMode = temp;
    return r;
  } as unknown) as T;
}


export function runInRefMode(cb: Function) {
  let temp = hideRefMode;
  hideRefMode = false;
  const r = cb();
  hideRefMode = temp;
  return r;
}

export function runInHideRefMode(cb: Function) {
  let temp = hideRefMode;
  hideRefMode = true;
  const r = cb();
  hideRefMode = temp;
  return r;
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

export function createAutorun(fn: (notrackFn: NoTrackFn) => void) {
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
    let lastValue = this._value;
    this._recompute();
    if (this._value !== lastValue) {
      depsManager.trigger(this);
    }
  }
}

const ProxyRefSymbol = Symbol('proxy-ref');

function isProxyRef(target: unknown) {
  return target && (target as ProxyRefImpl<any>)[ProxyRefSymbol] === true;
}

const proxyMap = new WeakMap<Object, Object>();

export function createReactive<T extends Record<string, any>>(obj: T, allReactive = false): T {
  const ref = new ProxyRefImpl(obj, allReactive);
  return ref.value;
}

enum META_TYPE {
  reactive,
  computed,
  autorun,
};

// map Object.prototype to its reactive keys
let metasMap = new WeakMap<Object, Map<Key, META_TYPE>>();

function addMeta(prototype: Object, key: Key, type: META_TYPE) {
  if (!metasMap.has(prototype)) {
    metasMap.set(prototype, new Map());
  }
  const metas = metasMap.get(prototype);
  metas!.set(key, type);
}

function getMetaKeys(prototype: Object) {
  return metasMap.get(prototype);
}

interface Component {
  render(): Fragment;
  props: Record<string, any>;
}

export function reactiveComponent(component: new () => Fragment, props?: Record<string, any>) {
  const ins = new component();
  // @ts-ignore
  ins.props = props || {};
  const comp = createReactive(ins) as any as Component;
  return comp;
}

/**
 * @reactive decorate
 */
export function reactive(prototype: Object, key: Key) {
  addMeta(prototype, key, META_TYPE.reactive);
}

/**
 * @computed decorate
 */
export function computed(prototype: Object, key: Key) {
  addMeta(prototype, key, META_TYPE.computed);
}

/**
 * @computed decorate
 */
export function autorun(prototype: Object, key: Key) {
  addMeta(prototype, key, META_TYPE.autorun);
}

class ProxyRefImpl<T extends object = any> {
  public [RefSymbol] = true;
  public [ProxyRefSymbol] = true;

  private _proxy: T;
  private _metaKeys?: Map<Key, META_TYPE>;

  constructor(private _obj: T, private _allReactive = false) {
    this._metaKeys = getMetaKeys(Object.getPrototypeOf(_obj));
    this._proxy = this._initProxy(_obj);
    this._initAutorun();
  }

  private _initAutorun() {
    if (!this._metaKeys) {
      return;
    }
    this._metaKeys.forEach((value, key) => {
      if (value === META_TYPE.autorun) {
        createAutorun(((this._obj as any)[key].bind(this._proxy)));
      }
    });
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
                const inserts = args.slice(2) as any[];

                const insertsLen = inserts.length;

                const len = obj.length;

                for (let i = 0; i < len; i++) {
                  if (i >= index && i < index + count) {
                    refMap.delete('' + i);
                  } else if (i >= index + count) {
                    refMap.set('' + (i - count + insertsLen), refMap.get('' + i)!);
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
        if (hideRefMode && isRef(ref)) {
          return ref.value;
        }
        return getRef(key);
      },
      set(_, key, value) {
        const ref = getRef(key);
        if (isRef(ref)) {
          // if origin ref is not proxyRef
          // but value is a object
          if (value && typeof value === 'object' && (ref as ProxyRefImpl)[ProxyRefSymbol] !== true) {
            refMap.set(key, new ProxyRefImpl(value, true));
            return true;
          }
          ref.value = value;
        } else {
          (that._obj as any)[key] = value;
        }
        return true;
      },
    });

    const getRef = (key: Key): Ref => {
      if (refMap.has(key)) {
        return refMap.get(key)!;
      }
      const prototype = Object.getPrototypeOf(this._obj);
      if (!this._metaKeys && !this._allReactive) {
        return (this._obj as any)[key];
      }
      const meta = this._metaKeys?.get(key);
      let result!: Ref;

      if (this._allReactive || meta === META_TYPE.reactive) {
        const value = (obj as any)[key];
        if (isRef(value)) {
          result = value;
        } else if (value !== null && typeof value === 'object') {
          // reactive object
          result = new ProxyRefImpl(createReactive(value, this._allReactive), true);
        } else if (value === 'function') {
          result = new RefImpl(wrapFnHideRefMode(value.bind(this._proxy)));
        } else {
          // ref
          result = new RefImpl(value);
        }
      } else if (meta === META_TYPE.computed) {
        const getter = Object.getOwnPropertyDescriptor(prototype, key)!.get!;
        result = new ComputedRefImpl(wrapFnHideRefMode(getter.bind(this._proxy)));
      }

      if (result) {
        refMap.set(key, result);
        return result;
      }
      const r = (this as any)._obj[key];
      if (typeof r === 'function') {
        return r.bind(this._proxy);
      }
      return r;
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
