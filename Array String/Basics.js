// swapping
let a = 3;
let b = 5;
// using a temporary variable
let temp = a;
a = b;
b = temp;
console.log(a, b); // 5 3
// using arithmetic operation
a = a + b; // 8
b = a - b; // 3
a = a - b; // 5
console.log(a, b); // 5 3
// using destructuring
[a, b] = [b, a];
console.log(a, b); // 5 3

// subarray - contiguous sequence of elements in array.
// length of subarray = (j-i)+1 where i is starting index and j is ending index.
// t - O(n^2) s - O(n)
function subarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let subarr = [];
        for (let j = i; j < arr.length; j++) {
            subarr.push(arr[j]);
            console.log(subarr);
        }
    }
}
subarrays([1, 2, 3, 4, 5]);
/*
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
[ 4 ]
[ 4, 5 ]
[ 5 ]
*/

// largest element
// t - O(n) s - O(1)
function largestElement(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max);
    }
    return max;
}
console.log(largestElement([3, 5, 7, 2, 8])); // 8
console.log(largestElement([-10, -20, -3, -1, -50])); // -1

// second largest element
// t - O(n) s - O(1)
function secondLargestElement(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max);
    }
    let second = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== max && nums[i] > second) {
            second = nums[i];
        }
    }
    return second;
}
console.log(secondLargestElement([3, 5, 7, 2, 8])); // 7
console.log(secondLargestElement([-10, -20, -3, -1, -50])); // -3

// bubble sort algorithm - compare each element with next element and swap them if they are in wrong order. 
// t - O(n^2) s - O(1)
function bubbleSort(arr) {
    // number of comparison = arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) { 
        // array.length-i-1 - don't compare last element as it is already sorted
        for (let j = 0; j < arr.length - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// selection sort algorithm  - finds smallest element and swap it with first element.
// t - O(n^2) s - O(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// insertion sort algorithm - starting from second element, shift larger element to right.
// t - O(n^2) s - O(1)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr;
}
console.log(insertionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
