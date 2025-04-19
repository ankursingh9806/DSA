// https://leetcode.com/problems/palindrome-number/description/

// Input: x = 121 Output: true
// Input: x = -121 Output: false
// Input: x = 10 Output: false

// math
// t - O(log n) s - O(1)
var isPalindrome = function (x) {
    let n = x;
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return rev === x;
};
