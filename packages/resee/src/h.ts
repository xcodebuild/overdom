import { schedule } from './batcher';
import { isDirective } from './directive';
import { isReactive, ReactiveHandler } from './reactive';
import { Fragment } from './fragment';

function buildComponent(
  component: (props?: Record<string, any>) => Fragment,
  props: Record<string, any> = {}
) {
  const fragment = component(props);
  return fragment;
}

function setAttr(node: HTMLElement, key: string, value: any) {
  if (key === 'value') {
    // @ts-ignore
    node.value = value;
    return;
  }
  node.setAttribute(key, value);
}

function bindAttr(node: HTMLElement, key: string, value: ReactiveHandler<any>) {
  let lastValue = value();
  schedule(() => {
    setAttr(node, key, lastValue);
  });

  value.subscribe(() => {
    const newValue = value();
    if (newValue !== lastValue) {
      schedule(() => {
        setAttr(node, key, newValue);
      });
      lastValue = newValue;
    }
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
        if (key === 'className') {
          key = 'class';
        }
        if (typeof value === 'function') {
          if (/^on[A-Z]/.test(key)) {
            tag.addEventListener(
              key.replace(/^on/, '').toLocaleLowerCase(),
              value
            );
          } else if (isReactive(value)) {
            bindAttr(tag, key, value);
          }
        } else {
          tag.setAttribute(key, value);
        }
      });
    }
    if (children) {
      children.forEach(child => {
        if (typeof child === 'string') {
          tag.appendChild(document.createTextNode(child));
        } else if (isReactive(child)) {
          const reactiveVal = child as ReactiveHandler<any>;
          const textNode = document.createTextNode(reactiveVal());
          reactiveVal.__internal_reactive__.subscribe(() => {
            schedule(() => {
              textNode.nodeValue = reactiveVal();
            });
          });
          tag.appendChild(textNode);
        } else if (isDirective(child)) {
          const directive = child as () => Fragment;
          const fragment = directive();
          fragment.appendToContainer(tag);
        } else if (Fragment.isFragment(child)) {
          (child as Fragment).appendToContainer(tag);
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
  }
  return fragment;
}

export function render(fragment: Fragment, container: HTMLElement) {
  fragment.appendToContainer(container);
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}
