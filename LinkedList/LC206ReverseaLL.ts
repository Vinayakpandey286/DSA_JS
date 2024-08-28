/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let prevNode = null;
  function recursive(node: ListNode) {
    if (node.next === null) {
      head = node;
      node.next = prevNode;
      return node;
    } // [1,2,3,4,5]
    let nextNode = node.next; // next node = 2
    node.next = prevNode; // at 1 node.next = null
    prevNode = node;
    return recursive(nextNode);
  }

  let reverseHead = recursive(head);
  return reverseHead;
}
