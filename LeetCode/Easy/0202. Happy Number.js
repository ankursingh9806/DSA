// time complexity: O(log n)
// space complexity: O(log n)

var isHappy = function (n) {
    let set = new Set();
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1;
};
