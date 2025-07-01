//? Problem Statement:
// Write a program to print all even numbers from an array.

//?Approach:
// Iterate through each element in the array.
// Check if the element is divisible by 2.
// If yes, print the element(it’s even).

//?Example:
//? Input: [10, 3, 5, 2, 7, 6, 9]

let arr = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

//? Output: 10 2 6
