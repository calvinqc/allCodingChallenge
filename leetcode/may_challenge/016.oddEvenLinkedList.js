/* eslint-disable no-multi-assign */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (head && head.next && head.next.next) {
    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even && even.next) {
      odd = odd.next = even.next;
      even = even.next = odd.next;
    }

    odd.next = evenHead;
  }

  return head;
};
