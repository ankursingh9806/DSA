// Recursion - a function (recursive function) calls itself.
// breaking down a large problem into smaller subproblems.
// base case - condition to stop recursion.
// recursive case - where function calls itself.

// print something n times
// t - O(n) s - O(n)
function print(n) {
    if (n === 0) { // base case
        return;
    }
    console.log('a');
    print(n - 1); // recursive call
}
print(5); // a a a a a

// print something n times in reverse order
// t - O(n) s - O(n)
function print(n) {
    if (n === 0) { // base case
        return;
    }
    print(n - 1); // recursive call
    console.log('a');
}
print(5); // a a a a a

// print 1 to n
// t - O(n) s - O(n)
function print(n, i = 1) {
    if (i > n) { // base case
        return;
    }
    console.log(i);
    print(n, i + 1); // move forward
}
print(5); // 1 2 3 4 5

// print n to 1
// t - O(n) s - O(n)
function print(n) {
    if (n === 0) { // base case
        return;
    }
    console.log(n);
    print(n - 1); // move backward
}
print(5); // 5 4 3 2 1

// sum of first n numbers
// t - O(n) s - O(n)
function sum(n) {
    if (n === 0) { // base case
        return 0;
    }
    return n + sum(n - 1); // recursive call
}
console.log(sum(5)); // 15

// factorial of n numbers
// t - O(n) s - O(n)
function factorial(n) {
    if (n === 0 || n === 1) { // base case
        return 1;
    }
    return n * factorial(n - 1); // recursive call
}
console.log(factorial(5)); // 120

// reverse an array
// t - O(n) s - O(n)
function reverse(arr, start, end) {
    if (start >= end) { // base case
        return;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr, start + 1, end - 1); // recursive call
}
let arr = [1, 2, 3, 4, 5];
reverse(arr, 0, arr.length - 1);
console.log(arr); // [5, 4, 3, 2, 1]
