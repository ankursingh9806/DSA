// https://leetcode.com/problems/missing-number/description/

// Input: nums = [3,0,1] Output: 2
// Input: nums = [0,1] Output: 2
// Input: nums = [9,6,4,2,3,5,7,0,1] Output: 8

// math
// t - O(n) s - O(1)
var missingNumber = function (nums) {
    let n = nums.length;
    let sum = 0;
    let actualSum = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    return actualSum - sum;
};
