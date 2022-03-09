class DomApi {
  constructor() {
    this.nodes = [];
  }

  traverse(node) {
    if (!node) return;
    this.nodes.push(node);
    for (let child of node.children) {
      this.traverse(child, this.nodes);
    }
    return this.nodes;
  }

  getElementById(nodeId) {
    for (let node of this.traverse(document.body)) {
      if (node.id === nodeId) {
        return node;
      }
    }
    return null;
  }

  getAllElementsByClassName(className) {
    const result = [];
    for (let node of this.traverse(document.body)) {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    return result;
  }

  getElementByclassName(className) {
    for (let node of this.traverse(document.body)) {
      if (node.classList.contains(className)) {
        return node;
      }
    }
    return null;
  }
}

export { DomApi };
