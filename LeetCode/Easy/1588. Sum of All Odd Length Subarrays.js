// time complexity: O(n^2)
// space complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if ((j - i + 1) % 2 !== 0) {
                totalSum += sum;
            }
        }
    }
    return totalSum;
};

// time complexity: O(n)
// space complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
    let total = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let l = i + 1;
        let r = n - i;
        let totalSubarr = l * r;
        let count = Math.floor((totalSubarr + 1) / 2);
        total += arr[i] * count;
    }
    return total;
};
