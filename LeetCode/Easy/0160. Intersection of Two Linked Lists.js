// time complexity: O(m + n)
// space complexity: O(1)

var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let a = headA;
    let b = headB;
    while (a !== b) {
        if (a !== null) {
            a = a.next;
        } else {
            a = headB;
        }
        if (b !== null) {
            b = b.next;
        } else {
            b = headA;
        }
    }
    return a; // or return b
};
