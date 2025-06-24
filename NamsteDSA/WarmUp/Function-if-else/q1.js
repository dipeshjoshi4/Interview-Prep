//! sum of integers

//? Problem Statemenr:
// Write a Program that defines a function to calculate the sum of two integers and prints the result.Call this function by passing two integer values.

//?Approach:

// Define a function that takes two numbers as input.
// Add the two numbers inside the function.
// Call the function with two integers & print the result.

//? Example:

// Input: 5, 3
// Process: a + b => 5 + 3 = 8
// Output: 8

//?Explanation:
// Sum(a,b) is a function that takes 2 arguments num1 and num2,
// adds them store the result in a variable named add
//prints the  result
//Sum(a,b) is calls the function with a=5 and b=3 ,so its print 8

//?Code:

function sumOfIntegers(num1, num2) {
    return num1 + num2
}
let resultSum = sumOfIntegers(5, 10)
console.log(resultSum)

