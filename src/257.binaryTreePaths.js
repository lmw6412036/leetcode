/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) return [];
  let res = [];
  var dg = (root, str) => {
    str += (str ? '->' : '') + root.val;
    if (root.left) dg(root.left, str);
    if (root.right) dg(root.right, str);
    if (root.left === null && root.right === null) {
      res.push(str);
    }
  };
  dg(root, '')
  return res;
};
