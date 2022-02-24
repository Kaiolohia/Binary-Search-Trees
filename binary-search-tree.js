class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = this.root
    let newNode = new Node(val)
    if (node === null) {
      this.root = newNode
      return node
    }
    let prevNode
    while (node) {
      prevNode = node
      node = val < node.val ? node.left : node.right
    }
    val < prevNode.val ? prevNode.left = newNode : prevNode.right = newNode
    return this.root
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function _insert(node) {
      if (node === null) {
        node = new Node(val)
        return node
      }
      if (val < node.val) {
        node.left = _insert(node.left)
      } else if (val > node.val) {
        node.right = _insert(node.right)
      }
      return node
    }
    this.root ? _insert(this.root) : this.root = new Node(val)
    return this.root
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

   find(val) {
    if (!this.root) return undefined
    let curNode = this.root
    while (curNode) {
      if (curNode.val === val) return curNode;
      curNode = val < curNode.val ? curNode.left : curNode.right;
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function _find(node) {
      if (node === null) return undefined
      if (node.val === val) return node
      if (val < node.val) return _find(node.left)
      else if (val > node.val) return _find(node.right)
    }
    return _find(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let tree = []
    function _dfsPreOrder(node) {
      tree.push(node.val)
      node.left && _dfsPreOrder(node.left)
      node.right && _dfsPreOrder(node.right)
    }
    _dfsPreOrder(this.root)
    return tree
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let tree = []
    function _dfsInOrder(node) {
      node.left && _dfsInOrder(node.left)
      tree.push(node.val)
      node.right && _dfsInOrder(node.right)
    }
    _dfsInOrder(this.root)
    return tree
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let tree = []
    function _dfsPostOrder(node) {
      node.left && _dfsPostOrder(node.left)
      node.right && _dfsPostOrder(node.right)
      tree.push(node.val)
    }
    _dfsPostOrder(this.root)
    return tree
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

   bfs() {
    let tree = []
    function _height(root) {
      if (!root) return 0
      let lHeight = _height(root.left)
      let rHeight = _height(root.right)
      return Math.max(lHeight, rHeight) + 1
    }
    function _pushCurrentLevel(node, level) {
      if (!node) return
      if (level === 1) tree.push(node.val)
      else if (level > 1) {
        _pushCurrentLevel(node.left, level - 1)
        _pushCurrentLevel(node.right, level - 1)
      }
    }
    const height = _height(this.root)
    for (let i = 1; i <= height; i++) {
      _pushCurrentLevel(this.root, i)
    }
    return tree
  }
}

module.exports = BinarySearchTree;