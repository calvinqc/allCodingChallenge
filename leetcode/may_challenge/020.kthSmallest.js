/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const arr = [];
  const inOrder = (root) => {
    if (root) {
      inOrder(root.left);
      arr.push(root.val);
      inOrder(root.right);
    }
  };

  inOrder(root);

  return arr[k - 1];
};
