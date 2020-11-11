if (!document.createRange) {
  class Range {
    start?: number;
    end?: number;
    container?: Node;
    afterEndNode?: Node | null;

    detach() {
      // pass
    }

    setStart(container: Node, offset: number) {
      this.start = offset;
      this.container = container;
    }
    setEnd(container: Node, offset: number) {
      this.end = offset;
      this.container = container;
    }
    deleteContents() {
      const nodes = Array.from(this.container!.childNodes);
      const lastNode = nodes[nodes.length - 1];
      this.afterEndNode = lastNode?.nextSibling || null;
      nodes.forEach((node, index) => {
        if (index >= this.start! && index <= this.end!) {
          node.parentNode?.removeChild(node);
        }
      });
    }
    insertNode(node: Node | DocumentFragment) {
      this.container!.insertBefore(node, this.afterEndNode!);
    }
  }
  // @ts-ignore
  document.createRange = function() {
    return new Range();
  };
}
