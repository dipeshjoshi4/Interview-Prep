//! VAR, LET & CONST Interview Questions

//scope is a certain region where the define varible recognize in program and after that region for the varible is not recoganize

//multiple type of scope => global,function,block

// var is global scope || let and const are block scope

//! GLOBAL SCOPE
//? Example:1

// var a = 5;
// function scope() {
//   console.log(a); //5
// }
// console.log("a = ",a);  //5
// scope()

//! BLOCK SCOPE

//? Example:1
// {
//     let z = 5;
// }
// console.log(z); // z is not defined : reference error

//? Example:2
// {
//     var q = 7;
//     const p = 5;
// }
// console.log(q); // 7
// console.log(p); // p is not defined : reference error


//! Question 1 : Variable Shadowing
//? in js varible shadowing allowing in block scope or you can say with const and let
// function test() {
//   let a = "Hello";
//   if (true) {
//     let a = "hi";
//     console.log(a); //Hi
//   }
//   console.log(a); //Hello
// }
// test();

//! Question 2 :  Illegal Shadowing

//? while shadowing a varible its shoudnt cross the boundary of scope if we shadow var varible with let then its a legal Shadowing .
//? but if we do let b variable shadow with the var b  variable then its illlegal
// function func() {
//   var a = "Hello";
//   let b = "Namaste"; //-------------------------------------problem

//   if (true) {
//     let a = "Hi"; // Legal Shadowing
//     var b = "Bye"; // Illegal Shadowing
//     console.log(a);
//     console.log(b);  //b is alredy defined
//   }
// }
// test();

//! declaration
//- this all are conditionally in same scope condition then it will true

//? var
// var a;
// var a;
//? - no error we can redeclare anytime

//? let
// let a;
// let a;
//? Errror - identifier a is alredy defined

//? const
// const a = 10;
// const a = 12;
//? Errror - identifier a is alredy defined

// const a = 12;
// const a;
//?Errror - missing initilazzer a is alredy defined

//! Above this all are conditionally in same scope condition then it will

//`````````````````````````````````````````````````````````````````````````````````````````

//! below this all are conditionally in not same scope condition then it will

//? let in different scope
// let a = 10;
// {
//   let a;
//   console.log(a) //undefined
// }
// console.log(a); //10

//? const in different scope
// const a = 10;
// {
//   const a = 15;
//   console.log(a) //15
// }
// console.log(a); //10

//! declaration with initialisation

// we can go without intilize  with var and let but for const we have intilize

//! declaration with re-initialisation

// we can go without re-intilize  with var and let but for const we have intilize

// let a = 5;
// a = 6;

// var b = 10;
// b = 15;

// const c = 15;  //ERROR- Assignment to const variable
// c = 25;

//! Hoisting -----------IMPORTANT

//? during creation phase js moves varible and function moving to the top of the code and this is Hoisting

//! example - 0 - var

//?insted of error it gives me undefined because of hoisting
// console.log(count)
// var count = 1; //?undefined

//?js look at above code like this
// var count;
// console.log(count)
// count = 1;

//! example - 1 - let

// console.log(count);
// let count = 1;  //? cannot  access 'count' before intialization
// var count2 = 2; //? in global scope its say count2 = undefined

//one of of the good thing is let warn us , var dont warn about this error . we get error still let will hoisting

// here our count is undefined which is in Temporal deadzone.
//it is time between declaration and intialize between let and const variable
// It refers to the period between the start of the block scope and the actual declaration of the variable.


//? Example-1

// function abc() {
//   console.log(a);
//   var a = 10;
// }
// abc(); //? undefined

//? so it inlize this function but not intialize this var a variable so in clg(a) is undefined and print that time
//? a is undefined
//? if the clg(a) after the declartion of a then its obvious gives a = 10 because till var a = 10 defined in global


//? Example-2

function abc() {
  console.log(a, b, c);
  const c = 30;
  let b = 15;
  var a = 10;
}
abc(); //? cannot access b before initialization

//? still b and c is hoisted but in the Temporal Dead Zone(TDZ)
//? TDZ means they have in scope but they are not declared yet 
//? here they scope is in one function but they have not declared yet

//! Variable Shadowing:
// In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.
// It's a common practice but can lead to confusion if not used carefully because the inner variable will "shadow" the outer variable.
// In first example, let a inside the if block shadows the outer let a, and they are two separate variables despite having the same name.

//! Illegal Shadowing:
// This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const. In second example, var b = "Bye"; is illegal shadowing because b is already declared using let in the same scope.

//! Hoisting:
// In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.However, only the declarations are hoisted, not the initializations or assignments.In third example, console.log(a); will result in undefined because the variable a is hoisted to the top but not initialized until later in the code(var a = 10;).

//! Temporal Dead Zone(TDZ):
//TDZ is a specific behavior related to variables declared using let and const.
//It refers to the period between the start of the block scope and the actual declaration of the variable.
//During the TDZ, accessing the variable will result in a ReferenceError.
//In fourth example, trying to log a, b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.