// time complexity: O(n^2)
// space complexity: O(n)

var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let count = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++;
            }
        }
        if (count === 1) {
            return i;
        }
    }
    return -1;
};

// time complexity: O(n)
// space complexity: O(n)

var firstUniqChar = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};
