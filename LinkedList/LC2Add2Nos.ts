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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let temp1 = l1;
    let temp2 = l2;
    let res = null;
    let resultHead = null;

    while (temp1 !== null || temp2 !== null) {
        let d1 = temp1 !== null ? temp1.val : 0;
        let d2 = temp2 !== null ? temp2.val : 0;
        let sum = d1 + d2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(digit);

        if (resultHead === null) {
            res = newNode;
            resultHead = res;
        } else {
            res.next = newNode;
            res = newNode;
        }

        if (temp1 === null) temp2 = temp2.next
        if (temp2 === null) temp1 = temp1.next
    }


    if (carry > 0) {
        let newNode = new ListNode(carry);
        res.next = newNode;
    }

    return resultHead;
};