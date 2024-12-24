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
 * @param {number} val
 * @return {TreeNode}
 */


var searchBST = function (root, val) {
    function searchNode(r, val) {
        if (r === null) return null
        if (r.val === val) return r
        let value = val > r.val ? searchNode(r.right, val) : searchNode(r.left, val)
        return value
    }
    return searchNode(root, val)
};