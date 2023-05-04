/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    // Initialize the node with a value and an optional array of children
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    // Initialize the tree with an optional root node
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // If the tree is empty, return 0
    if (!this.root) return 0;
    // Otherwise, call the helper function to traverse the tree and sum the values
    return this._sumValues(this.root);
  }

  _sumValues(node) {
    // Start with the current node's value
    let sum = node.val;
    // Loop through each child of the current node
    for (let child of node.children) {
      // Recursively sum the values of the child
      sum += this._sumValues(child);
    }
    // Return the sum of the current node and its children
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // If the tree is empty, return 0
    if (!this.root) return 0;
    // Otherwise, call the helper function to traverse the tree and count the even values
    return this._countEvens(this.root);
  }

  _countEvens(node) {
    // Start with a count of 0
    let count = 0;
    // If the current node's value is even, increment the count
    if (node.val % 2 === 0) count++;
    // Loop through each child of the current node
    for (let child of node.children) {
      // Recursively count the even values of the child
      count += this._countEvens(child);
    }
    // Return the count of even values in the current node and its children
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // If the tree is empty, return 0
    if (!this.root) return 0;
    // Otherwise, call the helper function to traverse the tree and count the nodes with values greater than lowerBound
    return this._numGreater(this.root, lowerBound);
  }

  _numGreater(node, lowerBound) {
    // Start with a count of 0
    let count = 0;
    // If the current node's value is greater than lowerBound, increment the count
    if (node.val > lowerBound) count++;
    // Loop through each child of the current node
    for (let child of node.children) {
      // Recursively count the nodes with values greater than lowerBound in the child
      count += this._numGreater(child, lowerBound);
    }
    // Return the count of nodes with values greater than lowerBound in the current node and its children
    return count;
  }
}

module.exports = { Tree, TreeNode };

