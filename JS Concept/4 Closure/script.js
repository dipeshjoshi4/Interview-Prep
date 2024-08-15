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
//     var name = "Youtube"; //?Outer inner scope
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