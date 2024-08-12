
console.log("Function");



//! Function Declaration Or Function Statement or Function defination
// function square(num) {
//     return num * num;
// }
// square(5);              //?--->this not work. it work when there is no return and only console.log()
// console.log(square)     //?--->this not work.gives function body
// console.log(square())   //?--->this not work.it gives NaN
// console.log(square(5))  //?25

//! With return keyword in function body Not work => whenever console.log() is there always function called like this "functionName()""

//! Function Expression
// -when you store Function inside any variable
// const square = function (num) {
//     return num*num
// }

//!Anoynumous Function
// function (num) {
//     return num * num
// }

//! What are the first class function
//in a language function treated like variable is called is first class function
//in this case function pass in another function,treated manipulate or return basically everything that varible can do that function can also do.
//is called first class function

//?Example

// function square(num) {
//     return num * num;
// }
// function displaySquare(fn) {
//     console.log("Square is " + fn(5));
// }
// displaySquare(square); //? square is 25

//! What is IIFE - immediatly invoke function expression

//! With return Not work => whenever console.log() is there always function when you called functionName()
// (function square(num) {
//     return num * num;
// })(5)

//! Working Fine like this
// (function square(num) {
//     console.log(num * num);
// })(5) //?25

//!Q-5-output based question on IIFE

// (function (x){
//         return (function (y) {
//                 console.log(x); //?1
//             })(2)
// })(1)

//- first it secrch in inner scoped then it find in outer scoped its possible because of Closure
//- closure as of now .... function abilty who can find value of varible and function outer that current function scoped


//!EXAMPLE-1-Function Scope Example

// const num1 = 20;
// const num2 = 3;
// const fname = "dipesh";
// function multiply() {
//     return num1 * num2
// }
// console.log(multiply()); //? 60
// //! A nested function example
// function getScore() {
//     const num1 = 2;
//     const num2 = 3;
//     function add() {
//         return `${fname} scored ${num1 + num2}`;
//     }
//     return add();
// }
// console.log(getScore()); //? "dipesh scored 5"


//! Function Scope O/p based Question

// for (var i = 0; i < 5; i++) {
//     setTimeout(
//         function () {
//             console.log(i);
//         }, i * 1000
//     );
// }

//!Differences Between var and let:
/*
//? var

//? Scope:
var is function-scoped or globally scoped if declared outside a function.
It does not create a new scope for each iteration of the loop.

//? Behavior in the loop:
When var is used, there is only one instance of i that is shared across all iterations.
By the time the setTimeout callbacks execute, the loop has already completed, and i has the final value of 5.
Therefore, each console.log(i) will output 5 five times.

//? let:

//? Scope:
let is block-scoped, which means it creates a new binding of i for each iteration of the loop.

//?Behavior in the loop:
When let is used, a new instance of i is created for each iteration of the loop.
This means that each setTimeout callback retains the value of i at the time the iteration was made.
As a result, the console.log(i) will correctly output 0, 1, 2, 3, and 4, each after the respective delay.



//?Using var:
Iteration 1 : i = 0 : setTimeout scheduled to log i (which is 0), but will run after 0 seconds.
Iteration 2 : i = 1 : setTimeout scheduled to log i (which is 1), but will run after 1 second.
Iteration 3 : i = 2 : setTimeout scheduled to log i (which is 2), but will run after 2 seconds.
Iteration 4 : i = 3 : setTimeout scheduled to log i (which is 3), but will run after 3 seconds.
Iteration 5 : i = 4 : setTimeout scheduled to log i (which is 4), but will run after 4 seconds.
After the loop finishes, i is 5. When the timeouts execute, they all log 5 because they reference the same i.

//?Using let:
Iteration 1: let i = 0: setTimeout scheduled to log i (which is 0), but will run after 0 seconds.
Iteration 2: let i = 1 : setTimeout scheduled to log i (which is 1), but will run after 1 second.
Iteration 3: let i = 2 : setTimeout scheduled to log i (which is 2), but will run after 2 seconds.
Iteration 4: let i = 3 : setTimeout scheduled to log i (which is 3), but will run after 3 seconds.
Iteration 5: let i = 4 : setTimeout scheduled to log i (which is 4), but will run after 4 seconds.
Each iteration of the loop creates a new block-scoped i.
When the timeouts execute, they log their respective i values, which are 0, 1, 2, 3, and 4.

//! Summary:most imop
var:Function-scoped, resulting in all setTimeout callbacks sharing the same i variable, leading to the final value being logged multiple times.
let:Block-scoped, resulting in each setTimeout callback having its own i variable, leading to the correct values being logged sequentially.

*/

//! Function Hoisting:

//? normal

// function functionName() {
//     console.log("Roadside Coder");
// }
// functionName(); //Roadside Coder

//? Hositing in Function
// functionName();
// function functionName() {
//     console.log("Roadside Coder"); //Roadside Coder
// }

//but in varible Hositing

//? normal
// var x = 5;
// console.log(x);

//? hositing different
// console.log(x); //undefined
// var x = 5;

//Now see Varible and function hositing browser

//?GLOBAL SCOPE
// functionName();
// console.log(x); //undefined
// function functionName() {
//     console.log("Coder"); // Coder
// }
// var x = 5;

//?Local or function Scope How Varible Hositing work same as Global

// functionName();
// function functionName() {
//     console.log(x); //Undefined
//     var x = 5;
//     console.log("Coder"); // Coder
// }


//! Question-9-Function Hositing -O/P Based Question

// var x = 21;
// var fun = function () {
//     console.log(x);
//     var x = 20;
// };
// fun(); //undefined x

//?so hOsiting is 2 step process .first it intialize whole code so as per that x is 21 because there intialize global scope
//?now when enter a function there is local scope x is 20 but to intialized the local the variable should before clg
//?so answer is x : undefined


//! question-10 parameters vs arguments

//? Params vs. Arguments
//? This code defines a function fn with parameters a, x, y, and a rest parameter numbers, showcasing how parameters are declared and used in functions.

//?Spread operator and rest operator
//? The code shows the usage of the rest parameter in a function declaration and the spread operator to pass an array as individual arguments to the function.

// function squar(num) { //?Parameters -value that receive
//     console.log(num*num)
// }
// squar(5); //?Arguments- value that passes

//! ts.=14:00 min

//! o/p based question on arguments and params withSPREAD AND REST

// function multiply(...nums) { //? Rest Operator
//     console.log(nums)
//     console.log(nums[0] * nums[1]);
// }
// var arr = [5, 6, 7, 8];
// multiply(...arr); //?Spread Operator

//! q-11-param vs arguments  - o/p based question with SPREAD AND REST

//?Example-1

// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// };
// fn(5, 6, 3, 7);

//? error -> rest parameter always have last formal parameter

//?Example-2

// const fn = (a, x, y, ...numbers) => {
//     console.log(x, y, numbers,numbers[0]);
// }
// fn(5, 6, 3, 7, 8, 9);

//?OUTPUT -> 5,6,3,[7,8,9],7

//!q12-Callback Function [t.s.->16:32]
// This code demonstrates a callback function greeting being passed as an argument to the processUserInput function,allowing dynamic behavior based on user input.

//a callback function is a function passed into another function as an argument,which it then invoked inside the outer function to complete some kind of routine or action

//?Example:

// function marks(student) {
//     alert(" less then 60 marks  " + student)
// }
// function processUserInput(callback) {
//     var student = prompt('Enter Student Name')
//     callback(student)
// }
// processUserInput(marks)

//js pre define function like map,reduce,filter,setTimeout ,addEventlistnearis also example

//!q13-Arrow Function [t.s.->19:32]

//?Arrow functions are shown in two forms:
//? one with explicit return and braces, and another with implicit return when the function body is a single expression.

//?Normal
// const add = function (firstNum, secondNum) {
//     return firstNum + secondNum
// }
// console.log(add(20, 15))


//?Arrow
// const add2 = (firstNum, secondNum) => {
//     return firstNum + secondNum
// }
// console.log(add2(10, 15))

//!difference between arrow vs Regular

//?1. Syntax

// const add = function(firstNum, secondNum){
//     return firstNum + secondNum
// }
// const add2 = (firstNum, secondNum) => {
//     return firstNum + secondNum
// }

//? 2. Implicit "return" Keyword
// const square = (num) => num * num;

//? 3. Arguments
// function fn(){
//     console.log(arguments);
// }
// fn(2, 3, 4) //as object i got 2,3,4 on 0,1,2 key

// const finArr = () =>{
//     console.log(arguments);
// }
// finArr(2,3,4) //ERROR : argument is not defined

//?4. this keyword

//?The code defines an object user with methods rc1 and rc2.
//? rc1 uses an arrow function, resulting in this referring to the global object,
//? while rc2 uses a regular function, allowing this to refer to the object itself.

// let user = {
//     username: "Coder",

//     //?Arrow
//     rc1: () => {
//         console.log("Subscribe " + this.username) 
//     },

//     //?Normal
//     rc2() {
//         console.log("Subscribe " + this.username) 
//     },

// };

// user.rc1();//?subscribe Undefined  => this have global scope because its pointing to global object
// user.rc2();//?subscribe Coder => this have local scope because its pointing to user object




//! Function Notes
/*
Question 1: Function Code
Explanation: This code defines a function square that calculates the square of a number and a function displaySquare that logs the square of 5 using the square function.

Question 2: What is IIFE?
Explanation: IIFE stands for Immediately Invoked Function Expression. It is a function that is executed immediately after it is defined. Example 1 shows a simple IIFE, while Example 2 demonstrates an IIFE with nested functions.

Question 3: Closure
Explanation: The code demonstrates closure where the inner function displayName has access to the variable name defined in the outer function init.

Question 4: Function Scope
Explanation: This code showcases function scope and variable shadowing. In Q-1, the mul function uses the variables num1 and num2 from the global scope. In Q-2, the setTimeout function inside a loop creates a closure but uses the global i variable.

Question 5: Function Hoisting
Explanation: Function hoisting allows calling a function before it is declared. The code demonstrates hoisting with a function declaration and how it behaves differently from non-hoisted functions.





*/
