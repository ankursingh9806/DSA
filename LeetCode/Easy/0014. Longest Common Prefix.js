// time complexity: O(n * m)
// space complexity: O(m)

var longestCommonPrefix = function (strs) {
    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return res;
            }
        }
        res += strs[0][i];
    }
    return res;
};
