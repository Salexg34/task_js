// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. 
// The list should be made by splicing together 
// the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    class ListNode {
        constructor(val, next) {
            this.val = val;
            this.next = next;
        }
    }

    const result = new ListNode();  
    let current = result;
    let currentList2 = list2;

    while (list1 !== null && currentList2 !== null) {
        if (list1.val <= currentList2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = currentList2;
            currentList2 = currentList2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = currentList2;
    }

    return result.next; 
};