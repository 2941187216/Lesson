/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
    // 定义递归函数
    function dfs(root, minValue, maxValue) {
        // 若是空树，则合法
        if(!root) {
            return true
        }
        // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
        if(root.val <= minValue || root.val >= maxValue) return false
        // 左右子树必须都符合二叉搜索树的数据域大小关系
        return dfs(root.left, minValue,root.val) && dfs(root.right, root.val, maxValue)
    }
    // 初始化最小值和最大值为极小或极大
    return dfs(root, -Infinity, Infinity)
  };