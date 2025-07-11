// time complexity: O(n + m)
// space complexity: O(1)

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if (list1 !== null) {
        curr.next = list1;
    }
    if (list2 !== null) {
        curr.next = list2;
    }
    return dummy.next;
};
