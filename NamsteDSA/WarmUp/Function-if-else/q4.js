//! Even or Odd Number

//?Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd.If the number is divisble by 2, it’s an Even number.Otherwise, it’s an Odd number.Test the function with inputs 18 and 5.

//? Approach:
// Create a function that takes a number.
// If number % 2 === 0, return “Even”.
// Else return “Odd”.

//? Example:
// Input: 18 → Output: Even Number
// Input: 5 → Output: Odd Number

//? Explanation:
// ● Accept the input number in the function.
// ● Check if the number modulo 2 equals 0.
// ● If yes, print or return “Even”.
// ● Otherwise, print or return “Odd”.
// ● Test the function with different numbers to verify correctness.

function EvenOrOdd(num) {
    if (num === 0) {
        console.log("Zero is neither Even nor Odd");
    } else if (num % 2 === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

EvenOrOdd(18); // Output: Even Number
EvenOrOdd(5);  // Output: Odd Number
EvenOrOdd(0);  // Output: Zero is neither Even nor Odd