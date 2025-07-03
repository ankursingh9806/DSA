// time complexity: O(1)
// space complexity: O(1)

var hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (((n >> i) & 1) === 1) {
            count++;
        }
    }
    return count;
};
