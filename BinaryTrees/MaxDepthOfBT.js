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
 * @return {number}
 */
function depth(root){
    if(root===null) return 0
    let max = Math.max(depth(root.left), depth(root.right)) +1
    return max
    
}
var maxDepth = function(root) {
    return depth(root)
};