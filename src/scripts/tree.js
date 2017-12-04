class Node {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

class Tree {
  constructor(id, data) {
    const node = new Node(id, data);
    this.root = node;
    this.traverseDF = this.traverseBF.bind(this);
  }
  // 深度优先搜索
  traverseDF(callback) {
    function walk(node) {
      if (node.children) {
        for (let i = 0; i < node.children.length; i += 1) {
          const child = node.children[i];
          walk(child);
        }
      }
      if (typeof callback === 'function') {
        callback(node);
      }
    }
    walk(this.root);
  }
  traverseBF(callback) {

  }
  add(id, data, parentId) {
    const child = new Node(id, data);
    let parent = null;
    const callback = function (node) {
      if (node.id === parentId) {
        parent = node;
      }
    };

    this.lookup(callback);
    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
  remove(id) {

  }
  lookup(callback) {
    // TODO callback为比较参数
    // 这样查找一定会整个遍历一遍这棵树
    this.traverseBF(callback);
  }
}


const tree = new Tree({ title: 'root' });

export default Tree;
