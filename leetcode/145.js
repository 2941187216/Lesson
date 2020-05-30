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
var postorderTraversal = function(root) {
    let res = [];
    function helper(node) {
        if(node) {
            let val = node.val;
            helper(node.left);
            helper(node.right);
            res.push(val);
        }
    }
    helper(root);
    return res;
};