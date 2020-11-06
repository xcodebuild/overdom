import { computed, ReactiveHandler } from './reactive';

export function buildText(value: ReactiveHandler<string>) {
  const textNode = document.createTextNode(value());
  computed(() => {
    const newValue = value();
    textNode.nodeValue = newValue;
  });
  return textNode;
}
