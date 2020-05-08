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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  const findDepth = (node, val, path = []) => {
    if (!node) return;
    if (node.val === val) return path;

    return (
      findDepth(node.left, val, path.concat(node.val)) ||
      findDepth(node.right, val, path.concat(node.val))
    );
  };

  const depthX = findDepth(root, x);
  const depthY = findDepth(root, y);
  if (
    depthX.length !== depthY.length ||
    depthX[depthX.length - 1] === depthY[depthY.length - 1]
  )
    return false;
  return true;
};
