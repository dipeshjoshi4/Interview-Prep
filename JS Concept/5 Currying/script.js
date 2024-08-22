console.log("Currying in js");

//! NOTES
/*
Question 2: sum(2)(6)(1)
This function demonstrates currying by taking three separate arguments and adding them together in a sequence using nested functions.

Question 4: Write a currying function evaluate("sum")(4)(2)
This question showcases a curried function evaluate that takes an operation string and two numbers, then performs the corresponding operation(sum, multiply, divide, subtract) based on the string input.

Question 5: Infinite Currying -> sum(1)(2)(3)....(n)
This example illustrates how currying can be used recursively to handle an indefinite number of arguments, continually adding them together until a termination condition is met.

Question 6: Currying vs Partial Application
This question compares currying and partial application, showing how currying allows for creating reusable functions with specific arguments filled in, while partial application involves pre - filling some arguments and leaving others for later.

Question 7: Real - world example of currying => Manipulating DOM
In this example, currying is used to create a function that updates the text content of an HTML element identified by its ID.This showcases a practical application of currying in web development for DOM manipulation.

Question 8: Curry() implementation
This code snippet demonstrates a custom implementation of the curry function, which transforms a multi - argument function into a curried function, enabling partial application and composability.It's applied to a simple sum function for demonstration.
*/



//Defination:

// - in functional programming where a function with multiple arguments is transformed into a sequence of functions,each taking a single argument. is called currying

// - This improves composability and allows partial application of functions.

// - when we have function f who have a,b params f(a,b) then we convert function into f(a)(b) this kind of format this is called currying

// - in currying function takes one argument at a time and return new function accepteing a next argument

// function f(a) {
//     return function (b) {
//         return `${a} ${b}`
//     }
// }
// console.log(f(5)(6)); //?5 6 //? this is called curried function

//![01:53]
//!Question-1-sum(2)(6)(1)

//Explain like this

//-1-first we write as normal so we can have more clerity

// function sum(a, b, c) {
//     console.log(a+b+c)
// }
// sum(2,6,1) //?9

//-2-Now let see how we can do as per question sum(2)(6)(1)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(2)(6)(1)); //?9

//-3-you can explain like one function at time like this
// console.log(sum(2));
// console.log(sum(2)(6));
// console.log(sum(2)(6)(1));

//![04:32]
//!Question-2-
//!evaluate("sum")(4)(2) => 6
//!evaluate("multiply")(4)(2) =>8
//!evaluate("divide")(4)(2) =>2
//!evaluate("subtract")(4)(2) =>2

//?s-1-let do like this

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === "sum") return a + b;
//             else if (operation === "multiply") return a * b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "subtract") return a - b;
//             else return "Invalid Operation"
//         }
//     }
// }

//?s-2- let run this

// console.log(evaluate("sum")(4)(2)); //?6
// console.log(evaluate("multiply")(4)(2)); //?8

//?s-3 there one more way to write or you can benfits of the currying
//?you have to mention with function  one varible and then you can use that mutliple time with different value like this
//?we provide multiply to any varible and this varible use n no of times
//?we provide once out condition in function then we can use multiple times

// const mul = evaluate("multiply")
// console.log(mul(4)(2)); //?8
// const div = evaluate("divide")
// console.log(div(4)(2)); //?2
// console.log(div(8)(8)); //?1

//![07:35]
//!Question-3-Infinite Currying ->sum(1)(2)(3).....(n)

//?for limitited Currying

// function add(a) {
//     return function (b) {
//         return function () {
//             return a + b;
//         }
//     }
// }
// console.log(add(5)(2)())

//but we want to write code which works for infinite like this---> console.log(add(5)(2)(4)(8)()); | they should adopted this code

//?infinite currying Example

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }
// console.log(add(5)(2)(4)(8)()) //?19

//?Explanation
//here add(a) function  return function b .if there is any value for b it takes and return a+b
//now a value is 5+2 =7  and it check for add(b) = add(4) <called></called> . if b have any value and b takes 4 as b and a+b now 7+4=11
//now a =11 and b have params so b =8 and then a+b now 11+8 = 19
// then a =19 and check b have any parameter so b find () no params and as per condition its return a which 19
//so it works for infinite currying it adopt

//![11:35]
//!Question-4-Currying vs Partial Application

//?Key difference - no of nested function are curried function have its depend of number of argument it received
//? means no of argument it receive accept no of nested function => currying

//? Partial application

// function sum(a) {
//     return function (b, c) {
//         return a + b + c;
//     }
// }
// const x = sum(10);
// console.log(x(5,6))
//? // OR
// console.log(sum(10)(5, 6));

//this function ehave 3 argument and 2 nested function unlike our previous version have 3 argument and accept 3 nested function
//SO THIS IS NOT CURRYING ITS JUST PARTIAL APPLICATION
// partial application work is  transform function into another function with small arity(No of operands or argument that function receive)

//? Currying

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// const x = sum(10);
// console.log(x(5)(6))
// //?or
// console.log(sum(10)(5)(6));

//![13:40]
//!Question-5-Manipulating DOM
//! Explain real world scenario where you use currying

// function updateElementText(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content;
//     }
// }
// const update = updateElementText("heading");
// update("hello Dev Let's Code") //? it chnage from "Hello Dipesh" to " Hello Dev"

//![16:12]
//!Question-6-curry() implementation