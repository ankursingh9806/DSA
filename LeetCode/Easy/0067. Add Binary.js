// time complexity: O(n)
// space complexity: O(n)

var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res;
};
