import { schedule } from './batcher';
import { isDirective } from './directive';
import { createAutorun, createReactive, isRef, reactive, reactiveComponent, Ref, runInRefMode, wrapFnHideRefMode } from './reactive';
import { Fragment } from './fragment';

function buildComponent(
  comp: (props?: Record<string, any>) => Fragment,
  props: Record<string, any> = {}
) {
  const component = reactiveComponent(comp as any, props);
  let fragment: Fragment;
  runInRefMode(() => {
    fragment = component.render();
    fragment.components.push(component);
  });
  return fragment!;
}

export class Component<T = any> {
  props!: T;
  constructor(props?: T) {
    // @ts-ignore
    this.props = createReactive(props || {});
  }
  render() {
    return null as unknown as Fragment;
  }
  onMount() {}
  onDestory() {}
}

function setAttr(node: HTMLElement, key: string, value: any) {
  if (key === 'value') {
    // @ts-ignore
    node.value = value;
    return;
  } else if (key === 'class') {
    console.error('should be className, but got class');
    return;
  } else if (key === 'className') {
    key = 'class';
  } else if (key === 'dangerouslySetInnerHTML') {
    const html = value.__html;
    if (isRef(html)) {
      createAutorun(() => {
        const newValue = html.value;
        schedule(() => {
          // @ts-ignore
          node.innerHTML = newValue;
        });
      });
    } else {
      node.innerHTML = html;
    }
    return;
  } else if (key === 'ref') {
    // value should be a (ref) => void
    value(node);
    return;
  }
  node.setAttribute(key, value);
}

function bindAttr(node: HTMLElement, key: string, value: Ref<any>) {
  let lastValue = value.value;

  const isEvent = /^on[A-Z]/.test(key);
  const eventName = isEvent ? key.replace(/^on/, '').toLocaleLowerCase() : '';
  let lastValueEventHandler = isEvent ? wrapFnHideRefMode(lastValue) : () => {};

  schedule(() => {
    if (isEvent) {
      node.addEventListener(eventName, lastValueEventHandler);
      return;
    }
    setAttr(node, key, lastValue);
  });

  createAutorun(() => {
    const newValue = value.value;
    schedule(() => {
      if (isEvent) {
        node.removeEventListener(eventName, lastValueEventHandler);
        lastValueEventHandler = wrapFnHideRefMode(lastValueEventHandler);
        node.addEventListener(eventName, lastValueEventHandler);
        return;
      }
      setAttr(node, key, newValue);
    });
    lastValue = newValue;
  });
}

export function h(
  type: string | Function,
  props: Record<string, string>,
  ...children: string[]
) {
  const fragment = new Fragment();
  if (typeof type === 'string') {
    const tag = document.createElement(type);
    if (props) {
      Object.keys(props).forEach(key => {
        const value = props[key];
        if (typeof value === 'function' && /^on[A-Z]/.test(key)) {
          tag.addEventListener(
            key.replace(/^on/, '').toLocaleLowerCase(),
            wrapFnHideRefMode(value)
          );
          return;
        } else if (isRef(value)) {
          bindAttr(tag, key, value);
          return;
        }
        setAttr(tag, key, value);
      });
    }
    if (children) {
      children.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
          tag.appendChild(document.createTextNode(child));
        } else if (isRef(child)) {
          const reactiveVal = child as Ref<any>;
          const val = reactiveVal.value;

          // textnode
          const textNode = document.createTextNode('' + val);
          createAutorun(() => {
            const newValue = reactiveVal.value;
            schedule(() => {
              textNode.nodeValue = newValue;
            });
          });
          tag.appendChild(textNode);
        } else if (isDirective(child)) {
          const directive = child as () => Fragment;
          const fragment = directive();
          fragment.appendToContainer(tag, fragment);
        } else if (Fragment.isFragment(child)) {
          (child as Fragment).appendToContainer(tag, fragment);
        } else {
          tag.appendChild(child);
        }
      });
    }
    fragment.appendChild(tag);
  } else if (typeof type === 'function') {
    // component
    return buildComponent(type as () => Fragment, {
      ...props,
      children: children,
    });
  } else if (isRef(type)) {
    // reactive component
    const comp = type as Ref;
    let frag: Fragment;
    createAutorun((notrack) => {
      if (!frag) {
        const component = comp.value;
        notrack(() => {
          frag = buildComponent(component, {
            ...props,
            children: children,
          });
        });
      } else {
        const newFrag = buildComponent(comp.value, {
          ...props,
          children: children,
        });
        frag.replaceWith(newFrag);
        frag = newFrag;
      }
    });
    return frag!;
  }
  return fragment;
}

export function render(fragment: Fragment, container: HTMLElement) {
  fragment.appendToContainer(container, null);
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}
