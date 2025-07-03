// time complexity: O(n + m)
// space complexity: O(n + m)

var mergeAlternately = function (word1, word2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            res.push(word1[i]);
            i++;
        }
        if (j < word2.length) {
            res.push(word2[j]);
            j++;
        }
    }
    return res.join('');
};
