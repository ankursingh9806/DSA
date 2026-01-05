// https://leetcode.com/problems/missing-number/description/

// time complexity: O(n)
// space complexity: O(1)

var missingNumber = function (nums) {
    let n = nums.length;
    let actualSum = 0;
    let expectedSum = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    return expectedSum - actualSum;
};
