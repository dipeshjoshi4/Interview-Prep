console.log("Closure")

//! Scope Defination
// scope represent current context of code.it can be either local, globally or block scoped

//! Example-1
// var fname = "Dipesh"; //? global scope
// console.log(fname) //?OUTPUT-dipesh

//! Example-2
// var scopeName = "globally" //here this will not use as lexical becoz first preference get to local scope
// function local() {
//     var scopeName = "locally" //?local scope
//     console.log(scopeName);
// }
// local(); //?OUTPUT-locally

//!what is the lexical scope
// variable outside of function local scope can be access inside of the function .
// but inside varible which is in function local scope cant be access outside function
// here if local scope "fname=locally" not there it will take global scope "fname=globally" take as output but vice versa not

//! Question 1: What is Lexical Scope ?
//Lexical scope refers to how variable names are resolved in nested functions based on where the functions are defined.In the provided code, the function local has a local scope where it can access variables defined within itself as well as variables in the global scope, such as the username variable.

//! Example-1

//? 1. outside variable can access

// var username = "dipesh_joshi1";
// function define() {
//     console.log(username);
// }
// define(); //?OUTPUT-dipesh_joshi1

//?2. inside variable can not be accessed outside of function local scope

// function define2() {
//      var username2 = "dipesh_joshi1";
// }
// console.log(username2); //?OUTPUT- REFERENCEError : username2 is not defined

//! Example-2

//? Global Scope
// function subscribe() {
//     var name = "Youtube"; //?Outer function scope
//     function displayName() {
//         alert(name); //?inner scope
//     }
//     displayName();
// }
// subscribe(); //? OUTPUT - Youtube
//? here the displayName() is working as closure

//! Closure defination

// A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)
// In other words, a closure gives you access to an outer function's scope from an inner function.
// here the "displayname()" access of outer scope  of "subscriber()" variable called "name"
// In JS, closures are created every time a function is created, at function creation time.

//!Question 2: How does Closure work ?
//Explanation : Closure is a JavaScript feature that allows a function to remember and access its lexical scope even when the function is executed outside that scope.
//In the code snippet, makeFunc() creates a closure around the name variable, enabling displayName to access name even after makeFunc has finished running.

//! example-1
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName(num) {
//         console.log(name,num);
//     }
//     return displayName;
// }
//? one way calling
// const myFun = makeFunc();
// console.log(myFun(23)); //?OUTPUT -Mozilla 23

//? second way calling
// makeFunc()(23);
//?OUTPUT - Mozilla 23 // makeFunc() -> it returns displayName || makeFunc()() => calling the displayname with second ()

//? Benifits

//- closure makes it posssible to function a private variable
//- js closure make sure what is in and what isn't in the function and make sure sibiling function nested take the use parent scope varible if its needed

//!T.S.-> 06:13

//! Closure ScopeChain
//! Question 3: Explain Closure Scope Chain.

// - Closure scope chain refers to the hierarchy of nested functions and their respective scopes that closures have access to.
// - The sum() creates nested closures, allowing access to variables like a, b, c, d, and e from different levels of scope within the chain.
// - means closure function can access outer function scope and the (grandparent) global function outer scope

// -> Every  closure has three scopes:
// Local Scope(Own Scope)
// Outer Function Scope
// Gloabal Scope

//!Example-1

// var userName = "ankush"
// function makeFun() {
//     var name = "Dipesh"
//     function displayName(num) {
//         console.log(name,num, userName);
//     }
//     return displayName;
// }
// makeFun()(23); //? dipesh 23 Ankush

//?SCOPECHAIN means displayName have acces to his parent function scope or parents parent (global) function scope

//!Example-2

// var e = 10;
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d + e;
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4)) //? 20

//!T.S.-> 08:50

//!q-1- make it explain

// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1; //shadowing happen
//         console.log(count); //?1
//     }
//     console.log(count); //?0
// })();

// The code snippet defines an immediately invoked function expression(IIFE) that declares a global variable count and a local variable count inside the printCount function.
// The output will be 1 followed by 0 because of variable shadowing and the conditional check inside printCount.

//!T.S.-> 10:37
//! Question - 2 - write a function that allows you to do this
//! var addsix = createBase(6);
//! addsix(10); //return 16
//! addsix(21); //returns 27

// function createBase(num) {
//     return function (innerNum) {
//         console.log(innerNum + num);
//     }
// }
// var addsix = createBase(6);
// addsix(10) //?16
// addsix(21) //?27

//? USECASE OF CLOSURE -> you can create function as closure where on a certain value can never change
//-> so here for the answer we create anoynomus function who work as closures and make the createBase value intact
//-> Explanation: The createBase() returns a closure that adds a base number(6 in this case) to an inner number provided as an argument.
//-> The addSix function created using createBase(6) adds 6 to its argument when invoked.

//!T.S.-> 12:57

//! question-3- How Closure use for the time optimization of our code

//! NORMAL WAY
// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++){
//         a[i] = i * i
//     }
//     console.log(a[index])
// }
//? for Example take 6 and 15
// console.time("6")
// find(6); //?36
// console.timeEnd("6") //?24.255 ms

// console.time("15")
// find(15); //?225
// console.timeEnd("15") //?18.255 ms

//?Now Use Closure for the time optimization

// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i
//     }
//     return function (index) {
//         console.log(a[index])
//     }
// }

// let closure = find();

// console.time("6")
// closure(6); //?36
// console.timeEnd("6") //?6: 0.1708984375 ms

// console.time("15")
// closure(15); //?225
// console.timeEnd("15") //? 15: 0.1689453125 ms