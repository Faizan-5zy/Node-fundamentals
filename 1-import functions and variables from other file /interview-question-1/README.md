# Interview Question: Filtering an Array

## Overview

This interview question involves filtering elements from an array based on a given condition. In the provided example, the array `arr` contains integers, and the goal is to filter elements based on whether they are greater than 3.

## Question

Given the array `arr = [2, 3, 6, 4, 7, 5, 3]`, filter the elements based on the condition "greater than 3."

## Solution

```javascript
let arr = [2, 3, 6, 4, 7, 5, 3];

// Using the filter method to filter elements greater than 3
let result = arr.filter((item) => {
    return item > 3;
});

console.log('result', result);
```

In this example, the `filter` method is used to create a new array (`result`) containing only those elements from the original array (`arr`) that satisfy the condition specified in the callback function.

## Output

The output of the code will be:

```bash
result [ 6, 4, 7, 5 ]
```

This output shows the elements of the array `arr` that are greater than 3.
