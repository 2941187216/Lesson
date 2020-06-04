/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    function helper(res, node, lever) {
        if(!node) return;
        if(!res[lever]) res[lever] = [];
        res[lever].push(node.val);
        helper(res, node.left, lever + 1);
        helper(res, node.right, lever + 1);
    }
    helper(res, root, 0);
    return res.reverse();
};