
//?Example-1

// function printHelloWorld() {
//     console.log("Hello World")
// }
// printHelloWorld();

//?Example-2
/*
function greet(name) {
    console.log("Namste " + name)
}
let x = "Akshay"
greet(x);              //Namste Akshay
greet()               //Namste undefined
greet("dipesh")       //Namste Dipesh
*/
//greet(dipesh)      //dipesh is not defined

//?Example-3-Create a Function which can add 2 number
/*
function sum(x, y) {
    let add = x + y;
    console.log(add);
}
sum(1, 1);       //2
sum(25, 3);      //28
sum(-11, 300);   //289
*/
//?in defination of function we pass dynamic value that called-----> Arguments

//?Ex-4-H.W.-For Multiplication
/*
function Mul(x, y) {
    let Mul = x * y;
    console.log(Mul);
}
let a = 10;
let b = 20;
let c = 40;
let z = 30;
Mul(a, b) //200
Mul(a, z) //300
*/

//? EXAMPLE-5- RETURN THE VALUE NOT PRINT
/*
function square(x) {
    let result = x * x;
    return result;
}
let value = square(6); //?square function return some answer which is catch in variable called "value"
console.log(value);
*/

//?Question
//Write a function that accepts a person’s age and prints whether the person is:
// “Invalid input” if the age is less than 1.
// “Not eligible to vote” if the age is less than 18.
// “Eligible to vote” if the age is 18 or above.
// Call the function with different test values: 18, 0, and 8.


//? Approach
// To solve this problem, follow these steps:
// Accept the input age in the function.
// Check if the age is less than 1; if yes, print “Invalid input”.
// If the age is valid but less than 18, print “Not eligible to vote”.
// If the age is 18 or more, print “Eligible to vote”.
// Test the function with various inputs to ensure all cases work correctly.

/*

function eligibleToVote(age) {
    if (age < 1) {
        console.log("Invalid input");
    } else if (age < 18) {
        console.log("Not eligible to vote");
    } else {
        console.log("Eligible to vote");
    }
}
eligibleToVote(18);  // Eligible to vote
eligibleToVote(0);   // Invalid input
eligibleToVote(8);   // Not eligible to vote

*/

//? Question
// Write a function that accepts a number and checks whether it is even or odd.If the number is divisible by 2(i.e., remainder is 0), it’s an Even number.Otherwise, it’s an Odd number.Test the function with inputs 18 and 5.

//? Approach
// Accept the input number in the function.
// Check if the number modulo 2 equals 0.
// If yes, print or return “Even”.
// Otherwise, print or return “Odd”.
// Test the function with different numbers to verify correctness.
   
//?Example
//Input: 18
//Output: Even
f
//Input: 5
//Output: Odd

// function isEvenOdd(num) {
//     let rem = num % 2;
//     if (rem == 0) {
//         console.log("Even number");
//     } else {
//         console.log("Odd number");
//     }
// }
// isEvenOdd(18);  // Output: Even number
// isEvenOdd(5);   // Output: Odd number
