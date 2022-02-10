/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {


  if(!root) return []

  let res = []
  let queue = []

  queue.push(root)

  while(queue.length){

     let current,currentNode =[]
     let len = queue.length
     for(let i = 0; i < len; i++){
       current = queue.shift()
       currentNode.push(current.val)
       current.left && queue.push(current.left)
       current.right && queue.push(current.right)
     }

     res.push(currentNode)


  }

  return res

};
// @lc code=end

