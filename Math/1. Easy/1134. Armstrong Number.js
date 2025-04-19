// https://leetcode.com/problems/armstrong-number/description/

// Input: x = 153 Output: true
// Input: x = 123 Output: false

// math
// t - O(log n) s - O(1)
var isArmstrong = function (x) {
    let n = x;
    let sum = 0;
    let power = x.toString().length;
    while (n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, power);
        n = Math.floor(n / 10);
    }
    return sum === x;
};
