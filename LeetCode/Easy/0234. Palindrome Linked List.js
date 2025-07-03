// time complexity: O(n)
// space complexity: O(1)

var isPalindrome = function (head) {
    // find middle
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse second half
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    // compare first half and second half
    let first = head;
    let second = prev;
    while (second !== null) {
        if (first.val !== second.val) {
            return false;
        } else {
            first = first.next;
            second = second.next;
        }
    }
    return true;
};
