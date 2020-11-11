import { schedule } from './batcher';
import { ReactiveItem } from './directive';
import { insert } from './utils';

export class Fragment {
  fragment = document.createDocumentFragment();
  container?: Node;
  childNodes: Node[] = [];
  key?: number | string;
  reactiveItem?: ReactiveItem<any>;

  static isFragment(obj: unknown) {
    if (!obj) {
      return;
    }
    const constructor = (obj as Object).constructor;
    return constructor === Fragment || constructor === FragmentList;
  }

  appendChild(child: Node) {
    const node = child as Node;
    this.fragment.appendChild(node);
    this.childNodes.push(node);
  }

  appendToContainer(container: Node) {
    this.container = container;
    this.createEmpty();
    container.appendChild(this.fragment);
  }

  replaceWith(fragment: Fragment) {
    fragment.container = this.container;
    const range = this.createRange();
    range.deleteContents();
    range.insertNode(fragment.fragment);
    range.detach();
  }

  createEmpty() {
    if (this.childNodes.length === 0) {
      this.appendChild(document.createComment('empty'));
    }
  }

  insertBeforeToContainer(container: Node, beforeNode: Node | null) {
    if (this.container) {
      // has a container already
      // remove self from current container first
      schedule(() => {
        this.fragment = document.createDocumentFragment();
        this.childNodes.forEach(node => {
          this.container!.removeChild(node);
          this.fragment.appendChild(node);
        });
      });
    }
    this.container = container;
    this.createEmpty();
    schedule(() => {
      container.insertBefore(this.fragment, beforeNode);
    });
  }

  createRange() {
    const parent = this.childNodes[0].parentNode!;
    const range = document.createRange();
    const startPos = Array.prototype.indexOf.call(
      parent?.childNodes,
      this.childNodes[0]
    );
    range.setStart(parent, startPos);
    range.setEnd(parent, startPos + this.childNodes.length);
    return range;
  }

  getFirstNode() {
    return this.childNodes[0];
  }
}

export class FragmentList extends Fragment {
  childFragments: Fragment[] = [];

  appendFragment(child: Fragment, key: string | number) {
    child.appendToContainer(this.fragment);
    this.childFragments.push(child);
    child.key = key;
  }

  insert(index: number, fragment: Fragment, newKey: string | number) {
    fragment.key = newKey;
    fragment.insertBeforeToContainer(
      this.container!,
      this.childFragments[index]?.getFirstNode() || null
    );
    insert(this.childFragments, index, fragment);
  }

  removeWithKeys(keys: (number | string)[]) {
    this.childFragments.forEach((child, index) => {
      if (keys.indexOf(child.key!) === -1) {
        return;
      }
      const fragment = child;
      schedule(() => {
        const range = fragment.createRange();
        range.deleteContents();
        range.detach();
      });
      this.childFragments.splice(index, 1);
    });
  }

  move(fromIndex: number, toIndex: number) {
    const insertBefore = this.childFragments[toIndex]

    let insertBeforeNode: Node | null = insertBefore?.getFirstNode();

    const target = this.childFragments[fromIndex]!;
    target.insertBeforeToContainer(
      this.container!,
      insertBeforeNode,
    );

    insert(this.childFragments, toIndex, target);
    let deleteIndex = fromIndex;
    if (toIndex < fromIndex) {
      deleteIndex += 1;
    }
    this.childFragments.splice(deleteIndex, 1);
  }
}
