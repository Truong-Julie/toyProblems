/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  var bstNode1 = p
  var bstNode2 = q
  
  var checkTree = function (node1, node2) {
    debugger
    if (node1 === null && node2 === null) {
        return true;
    } else if (node1 === null || node2 === null) {
        return false;
    } 
    if (node1.val === node2.val) {
       var left = checkTree(node1.left, node2.left);
       var right = checkTree(node1.right, node2.right);
       return right && left;
    } else {
        return false;
    }
  }
  return checkTree(bstNode1, bstNode2)
};





const TreeNode = function(val) {
  this.val = val
  this.left = this.right = null
}

TreeNode.prototype.addChild = function (val) {
  if (this.val > val) {
    if (this.left === null) {
      this.left = new TreeNode(val)
    } else {
      this.left.addChild(val);
    }
  } else {
    if (this.right === null) {
      this.right = new TreeNode(val)
    } else {
      this.right.addChild(val)
    }
  }
}

var tree1 = new TreeNode(5)
tree1.addChild(2)
tree1.addChild(3)
tree1.addChild(7)

var tree2 = new TreeNode(5)
tree2.addChild(2)
tree2.addChild(3)
tree2.addChild(7)

console.log(isSameTree(tree1, tree2))
