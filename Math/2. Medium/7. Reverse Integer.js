// https://leetcode.com/problems/reverse-integer/description/

// Input: x = 123 Output: 321
// Input: x = -123 Output: -321
// Input: x = 120 Output: 21

// math
// t - O(log n) s - O(1)
var reverse = function (x) {
    let n = Math.abs(x);
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
        return 0;
    }
    if (x < 0) {
        return -rev;
    } else {
        return rev;
    }
};
