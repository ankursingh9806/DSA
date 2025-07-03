// time complexity: O(n)
// space complexity: O(n)

var countBits = function (n) {
    let res = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        let count = 0;
        for (let j = 0; j < 32; j++) {
            if (((i >> j) & 1) === 1) {
                count++;
            }
        }
        res[i] = count;
    }
    return res;
};

// time complexity: O(n)
// space complexity: O(n)

var countBits = function (n) {
    let res = new Array(n + 1);
    res[0] = 0;
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
};
