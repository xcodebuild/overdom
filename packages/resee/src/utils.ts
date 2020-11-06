export function insert<T>(array: Array<T>, index: number, item: T) {
  array.splice(index, 0, item);
}

export function createRangeFromNodes(nodes: Node[]) {
  const parent = nodes[0].parentNode;
  const range = document.createRange();
  const startPos = Array.prototype.indexOf.call(parent?.childNodes, nodes[0]);
  range.setStart(parent!, startPos);
  range.setEnd(parent!, startPos + nodes.length);
  return range;
}
