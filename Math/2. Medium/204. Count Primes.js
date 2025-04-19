// https://leetcode.com/problems/count-primes/description/

// Input: n = 10 Output: 4
// Input: n = 0 Output: 0
// Input: n = 1 Output: 0

// brute force
// t - O(n*sqrt(n)) s - O(1)
var countPrimes = function (n) {
    // check if a number is prime or not
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    // count prime number
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};

// sieve of eratosthenes
// t - O(n log * log n) s - O(n)
var countPrimes = function (n) {
    let isPrime = new Array(n);
    for (let i = 0; i < n; i++) {
        isPrime[i] = true;
    }
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    return count;
};
