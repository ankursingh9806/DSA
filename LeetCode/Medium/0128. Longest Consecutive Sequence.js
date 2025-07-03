// time complexity: O(n)
// space complexity: O(n)

var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let res = 0;
    for (let val of set) {
        if (!set.has(val - 1)) {
            let currVal = val;
            let count = 1;
            while (set.has(currVal + 1)) {
                currVal++;
                count++;
            }
            res = Math.max(res, count);
        }
    }
    return res;
};
