// time complexity: O(1)
// space complexity: O(1)

var reverseBits = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let bit = n & 1;
        res = (res << 1) | bit;
        n = n >> 1;
    }
    return res >>> 0;
};
