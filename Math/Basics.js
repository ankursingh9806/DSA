// count digits
// t - O(log n) s - O(1)
var countDigits = function (x) {
    let n = Math.abs(x);
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
};
console.log(countDigits(123)); // 3
console.log(countDigits(-123)); // 3

// check for prime
// t - O(n) s - O(1)
var isPrime = function (x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
// t - O(sqrt(n)) s - O(1)
var isPrime = function (x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// print all divisors
// t - O(n) s - O(1)
var printDivisors = function (x) {
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            console.log(i);
        }
    }
};
console.log(printDivisors(36)); // 1, 2, 3, 4, 6, 9, 12, 18, 36
console.log(printDivisors(12)); // 1, 2, 3, 4, 6, 12

// find greatest common divisor of two numbers
// t - O(min(x1, x2)) s - O(1)
var findGCD = function (x1, x2) {
    for (let i = Math.min(x1, x2); i >= 1; i--) {
        if (x1 % i === 0 && x2 % i === 0) {
            return i;
        }
    }
};
console.log(findGCD(9, 12)); // 3
console.log(findGCD(20, 15)); // 5
// t - O(log(min(x1, x2))) s - O(1)
var findGCD = function (x1, x2) {
    while (x2 !== 0) {
        let temp = x2;
        x2 = x1 % x2;
        x1 = temp;
    }
    return x1;
};
console.log(findGCD(9, 12)); // 3
console.log(findGCD(20, 15)); // 5
