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
// //? for Example take 6 and 15
// console.time("6")
// find(6); //?36
// console.timeEnd("6") //?52.255 ms

// console.time("15")
// find(15); //?225
// console.timeEnd("15") //?46.255 ms

//- Every time value is keep changing

//!Now Use Closure for the time optimization

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

//! Very Important Conclusion
// this also keep changing value everytime but its very low time taking  and its huge time optimization
//so here anynoumus function take index from their outer scope or lexical scope so that we dont wait for the loop

//! t.s. => 15:33

//! Very Important
//!Question-4-Block Scope and setTimeout
// function a() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i); //What is logged?
//         },1* 1000);
//     }
// }
// a();

//setTimeout print only after complete code run successfully

//we have reference =>
// i when its 0 to our memory || i when its 1 to our memory || i when its 2 to our memory || i when its 3 condition false and
// as early said setTimeout after complete its print and last time i encountered with 3 so its print
// i i i  => 3 3 3

// if there is let then {i=0} in one scope second scope {i=1} and third scope {i=2} spo after complete code its look on scope to what is the answer and its shows 1,2,3

// if we have to use var and then we have to  anyhow print 0,1,2 so what  we do
// so we have to use closure

// for (var i = 0; i < 3; i++) {

//     function inner(i) {
//         setTimeout(function log() {
//             console.log(i); //What is logged?
//         }, 1 * 1000);
//     }

//     inner(i);
// }
//?0 1 2


// -> every time passed i value in inner its not refresh the value
// -> complete local value for inner so whole new memory allocation created

//!T.s. -> 19:52

//!que:5:How Would You use a closure to create a private counter?

//- when we creat private counter we use prefix "_" => _Counter

// function counter() {
//     var _Counter = 0;

//     function add(increment) {
//         _Counter += increment
//     }

//     function retrive() {
//         return "Counter = " + _Counter
//     }

//     return {
//         add,
//         retrive,
//     };
// }

// const c =  counter()
// c.add(5)
// c.add(10)


// console.log(c.retrive());  //Counter =15

//here we dont directly manupulate private counter but we use closure and use function to manipulate the private counter

 //!T.S. => 22:31

 //WE USE SIMILAR concept use in our next question which is Module pattern

 //!Question-6-What is Module  Pattern?

// var Module = (function () {
//     function privateMethod() {
//         //do Something
//     }
//     return {
//         publicMethod: function () {
//             //can Call privateMethod()
//         },
//     };
// })
// ()

//- public function return to user
//- private function not get outside module scope but a public function can call private function
//- in example - if private have api call but we dont want to share api with user we can manipulate for information with user to get data
//- in this cases module pattern helps a lot

// var Module = (function () {
//     function privateMethod() {
//         console.log('private')
//     }
//     return {
//         publicMethod: function () {
//             console.log('public')
//         },
//     };
// })
//     ()
// Module.publicMethod(); // public
// Module.privateMethod(); //is not a function

//!T.s. -> 24:24

//!Question-7-make this run only once

//?multiple time run like this

// let view;
// function likeTheVideo() {
//     view = "Coder"
//     console.log("Subscribe to ",view);
// }
// likeTheVideo() //Subscribe to coder
// likeTheVideo() //Subscribe to coder
// likeTheVideo() //Subscribe to coder

//?one time running like this

// let view;
// function likeTheVideo() {
//     let called = 0;
//     return function () {
//         if (called > 0) {
//             console.log("Already Subscribe to  Programmer")
//         } else {
//             view = "Coder";
//             console.log("Subscribe to coder");
//             called++;
//         }
//     };
// }

// let finalAns = likeTheVideo()
// finalAns(); //?Subscribe to Coder
// finalAns(); //Already Subscribe to  Programmer
// finalAns(); //Already Subscribe to  Programmer
// finalAns(); //Already Subscribe to  Programmer


//!T.s. -> 27:00

//! Question-8-Once Polyfill
//? if interview ask more genric function to do this

function once(func, context) { 
    let ran;
    return function () { 
        if (func) {     
            ran = func.apply(context || this, arguments); 
            func = null;
        }
        return ran;
    }
}

//?multiple time run
// const hello = ()=>console.log("hello");
// hello(); //?hello
// hello(); //?hello
// hello(); //?hello

//?one time runs
// const hello = once((a,b)=>console.log("hello",a,b));
// hello(5,4); //?hello 5 4
// hello();
// hello();

//?Understand the code
//we check if function have value then we know func have value this once((a,b)=>console.log("hello",a,b));
//so we run the function and after running ran varible we null the func so its work only once


//?Apply Method
// arguments => takes array
// apply method is use for take argument as an array
//?example-1
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// console.log(max);//? output: 7

//?Understanding some varible
// this => referes to func
// if (func) {  }    //?if something inside func then go into this
// context => any local context if there is any one have

//!T.s. -> 30:40

//!Very Important
//!Question-9-Memozie Polyfill

//!Question
//? give this function which have expesive calculation inside and takes decent amount of time to run  and time calculation is differetn both the time.so how do we minimize the time when both function calculation and parameter are the same. we need to cache the result of previous function somewhere

// ?code
// const clumsyProduct = (num1, num2) => {
//     for (let i = 1; i <= 10000000; i++) { }
//     return num1*num2
// }
// console.time("First Call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("Second Call");

//? Answer

function myMemoize(fn, context) {

    const res = {};  //storing result of previously executed function

    return function (...args) { //takes argument from the user || 

        var argsCache = JSON.stringify(args); //first convert this arguments  into string

        if (!res[argsCache]) { //if there is no argscache in our res obj then we calaculate our value
            res[argsCache] = fn.call(context || this, ...args) // res = {"5,6":30}
        }
        return res[argsCache];
    }
}


const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 10000000; i++) { }
    return num1 * num2
}

const memoizedClumzyProduct = myMemoize(clumsyProduct)

// console.time("First Call");
// console.log(clumsyProduct(9467, 7649)); //84.8888
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(clumsyProduct(9467, 7649)); //86.888
// console.timeEnd("Second Call");

console.time("First  Call");
console.log(memoizedClumzyProduct(9467, 7649)); //8.8888
console.timeEnd("First  Call");

console.time("Second Call");
console.log(memoizedClumzyProduct(9467, 7649)); //0.888
console.timeEnd("Second Call");




//!ts:36:05

//!Question-10- difference between closure and scope

//? Closure
// - Closure refers to a function's ability to retain access to variables from its lexical scope even after that scope has closed,
// - whenevr you create function with in another function (nested function) then inner function is the Closure
// - this closure usully takes outer function varible in latter time
// - global -> outer scope -> local scope

//? Scope
//- scope is what varible you have to access
//- while scope refers to the visibility and accessibility of variables within a specific context,
//- such as global scope, function scope, or block scope.
