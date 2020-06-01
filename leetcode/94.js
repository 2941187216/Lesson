/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    function helper(node) {
        if(node) {
            let val = node.val;
            helper(node.left);
            res.push(val);
            helper(node.right);
        }
    }
    helper(root);
    return res;
};