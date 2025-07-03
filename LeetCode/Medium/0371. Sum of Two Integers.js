// time complexity: O(1)
// space complexity: O(1)

var getSum = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
};
