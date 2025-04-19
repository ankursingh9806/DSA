# Complexity

**big O** - a notation to describe time complexity and space complexity of an algorithm. 

**time complexity** - amount of time required by an algorithm to run relative to input size. when you execute operations like loops the algorithm requires time. 

**space complexity** - amount of memory space required by an algorithm to run relative to input size. when you initialize variables like array or string the algorithm requires memory space.

- constant - O(1)
- logarithmic - O(log n)
- linear	- O(n)
- quadratic	- O(n^2)
- cubic - O(n^3)
- exponential - O(2^n)
- factorial - O(n!)
- etc.

when talking about complexity there are normally three cases -
- best case scenario
- average case scenario
- worst case scenario

constants are ignored - O(9999999n) = O(8n) = O(n) = O(n/500)  
some terms can be ignored - O(2^n + n^2 − 500n) = O(2^n)

## time complexity examples

**time complexity - O(n)**  
loop runs from 0 to n-1: (n-1)-0+1 times
```
for (i = 0; i < arr.length; i++) { // n = arr.length
    print(arr[i])
}
```

**time complexity - O(n)**  
first loop runs from 0 to n-1: (n-1)-0+1 times  
second loop runs from 0 to 500000-1: (500000-1)-0+1 times
```
for (i = 0; i < arr.length; i++) { // n = arr.length
    for (i = 0; i < 500000; i++) {
        print(arr[i])
    }
}
```

first two algorithms technically have same time complexity but in reality the second algorithm is much slower than the first one.

**time complexity - O(n^2)**  
first loop runs from 0 to n-1: (n-1)-0+1 times  
second loop runs from 0 to n-1: (n-1)-0+1 times
```
for (i = 0; i < arr.length; i++) { // n = arr.length      
    for (j = 0; j < arr.length; j++) {  
        print(arr[i] * arr[j])
    }
}
```

**time complexity - O(n^2)**  
first loop runs from 0 to n-1: (n-1)-0+1 times  
second loop runs from i to n-1: (n-1)-i+1 times: n-0 + n-1 + n-2 + ... + 1: n(n+1)/2
```
for (i = 0; i < arr.length; i++) { // n = arr.length
    for (j = i; j < arr.length; j++) {
        print(arr[i] + arr[j])
    }
}
```

**time complexity - O(n+m)**  
first loop runs from 0 to n-1: (n-1)-0+1 times  
second loop runs from 0 to n-1: (n-1)-0+1 times  
third loop runs from 0 to m-1: (m-1)-0+1 times
```
for (i = 0; i < arr.length; i++) { // n = arr.length
    print(arr[i])
}
for (i = 0; i < arr.length; i++) { // n = arr.length
    print(arr[i])
}
for (i = 0; i < arr2.length; i++) { // m = arr2.length
    print(arr2[i])
}
```
## space complexity examples

**space complexity - O(1)**
```
for (i = 0; i < arr.length; i++) { // n = arr.length
    print(arr[i])
}
```

**space complexity - O(n)**
```
doubledNums = []
for (i = 0; i < arr.length; i++) { // n = arr.length
    doubledNums.add(arr[i] * 2)
}
```

**space complexity - O(n)**
```
nums = []
oneHundredth = n / 100
for (i = 0; i < oneHundredth; i++) { // n = arr.length
    nums.add(arr[i])
}
```
