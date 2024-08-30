console.log("this");

//!NOtes

/*
Question 5: Output
Explanation: There's an error in the code (object.getMessage() is undefined). 
It should be user.getName() to log "Piyush!" since this.firstName refers to the property inside the user object.

Question 6: Result of accessing its ref?
Explanation: The result is undefined. In makeUser(), this refers to the global object (in non-strict mode) or undefined (in strict mode), not the object being created.
So, user.ref.name is trying to access a property of undefined.

Question 7: What logs to console?
Explanation: "Piyush Agarwa;!" logs to the console. The setTimeout function changes the context of this, but since logMessage is an arrow function inside the user object, this still refers to the user object.

Question 8: Output
Explanation: The output will be:

"Hello, Piyush!" from user.greet() since this.name refers to the name property in the user object.
"Goodbye, undefined!" from user.farewell() because arrow functions (() => {}) don't have their own this, so this.name refers to the name in the global scope, which is undefined.

Question 9: Calculator operations
Explanation: The sum() and mul() methods of the calculator object operate on this.a and this.b, which are set using the read() method with prompts. The alerts then show the sum and multiplication of the values entered via prompts.

Question 10: Output
Explanation: The output will be 4, not 5. This is because callback() is invoked without a specified context (this), so it defaults to the global object (window in a browser), where length is 4.

Question 11: Implement this Code
Explanation: The calc object is set up to perform chained arithmetic operations. The add(), subtract(), and multiply() methods update the total property of the calc object accordingly, allowing chaining of operations like .add().multiply().subtract().add().

*/

//?Define 'this' Keyword
// -> as per english language "this" in js refere something

//!Example-1
//?In JavaScript, this refers to the object it belongs to. In the given code, this.a inside the console.log refers to the property a of the global object, which is undefined unless explicitly defined elsewhere.
// this.a = 5;
// console.log(this.a); //?5
// console.log(this)
//? so this refere window object and print window
//?so as per above example this will work as per which context this keyword will use

//!Example-2-in Normal Function and Arrow Function
// this.a = 5;
// function getParam() {
//     console.log(this.a);
// }
// const getParamArrow = () => {
//     console.log(this.a)
// }
// getParam(); //? 5
// getParamArrow() //? 5
//? 5 ->Because it target its parent object here parent is global object
//?in this case arrow and normal function works same but not in all case .we will learn that

//!Example-3-this keyword behaviourl inside object

// let user = {
//     name: "Dipesh",
//     age: 24,
//     getDetails() {
//         console.log(this.name); //?Dipesh
//         console.log(this); //?{name: 'Dipesh', age: 24, getDetails: ƒ}
//     }
// }
// user.getDetails();
//? it referes to function parent means user object in this case


//!Example-3.1 - What if this keyword in nested object
// let user = {
//     name: "Dipesh",
//     age: 24,
//     childObj: {
//         newName :"Joshi",
//         getDetails() {
//             console.log(this.newName ,"and", this.name); //?joshi and undefined
//         }
//     }
// }
// user.childObj.getDetails();
//? it referes to function parent means childObj object in this case anot the user object

//!Example3.2 what if arrow function in object
// let user = {
//     name: "Dipesh",
//     age: 24,
//     getDetails: () => {
//         console.log(this.name) //?empty
//         console.log(this) //?window
//     }
// }
// user.getDetails();

// so in arrow function take value from arrow function parent which is must be normal function and taking value from that normal function parent

//let see what if

// let user = {
//     name: "Dipesh",
//     age: 24,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name);
//         nestedArrow()
//    }
// }
// user.getDetails(); //?Dipesh

// now its arrow function parent is normal func and normal func take value from its parent for this keyword
//!arrow function
//!if arrow in normal function -> refers to normal function parent
//!if arrow function -> not under normal function -> referes to  direct window object

//! Example-4- how this keyword work in class or constructor

//?In a class constructor, this refers to the instance of the class being created.
//?So, this.name inside the getName() method of the user class instance will log the value passed during instantiation, which is "Piyush" in this case.

// class user {
//     constructor(n) {
//         this.name = n;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }

//?getName() this keyword refer to all consturctor so now make new object
// const User = new user("Piyush");
// console.log(User)

//? object name -> user {name: 'Piyush'}
// User.getName() //?Piyush

//!t.s.:08:09
//!Question-1-What is the Output?

// const user = {
//     firstName: "dipesh",
//     getName() {
//         const firstName = "piyush";
//         return this.firstName;
//     }
// }
// console.log(user.getName()); //? dipesh

//?so for get name function this refers to his parents means user object  so answer dipesh

//!t.s.:09:20
//!Question-2-What is the result of accessing its ref? why?

// function makeuser() {
//     return {
//         name: "John",
//         ref: this,
//     };
// }
// let user = makeuser();
// console.log(user.ref.name); //?empty
//? its empty because when user have return object where its parent is window object so ....

//?now interview said fix this so that we can get output name John

// function makeuser() {
//     return {
//         name: "john",
//         ref() {
//             return this
//         }
//     }
// }
// let user = makeuser();
// console.log(user.ref().name); //?john
//? for parent of normal func this refer for john be output we have make function of ref()

//!t.s.:11:23
//!Question-3-What is the Output?

// const user = {
//     name: "Dipesh Joshi",
//     logMessage() {
//         console.log(this.name)
//     },
// };
// setTimeout(user.logMessage,1000) //?empty
//?so here user.logMesage is callback rather then function so while function copy inside setTimeout .
//? there is no longer access to user object.when this excuting independetlly then it access window object

//!Fixed this above function
//? dont use a callback use as method. make function

// const user = {
//     name: "Dipesh Joshi",
//     logMessage() {
//         console.log(this.name)
//     },
// };
// setTimeout(
//     function () {
//         user.logMessage();
//     }, 1000) //?Dipesh Joshi


//!t.s.:13:13
//!Question-4-What is the Output?

// const user = {
//     name: "dipesh",
//     greet() {
//         return `hello,${this.name}!`;
//     },
//     farwell: () => {
//         return `Goodbye,${this.name}!`;
//     }
// }
// console.log(user.greet()); //?hello,dipesh !
// console.log(user.farwell()); //goodbye,!

//!t.s.:14:00
//!Question-5-Create an Object Calculator

// let calculator = {
//     read() {
//         this.a = +prompt("a = ", 0);
//         this.b = +prompt("b = ", 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//!t.s.:15:39
//!Question-6-What is the Output?

// var length = 4;
// function callback() {
//     console.log(this.length)
// }
// const object = {
//     length: 5,
//     method(fn){
//         fn()
//     },
// }
// object.method(callback) //?4
//?so here callback indvidually call inside method and it target or refer to global and in global length willl be 4

//! Modify the Code (Tricky and most imp for senior dev)

// var length = 4;
// function callback() {
//     console.log(this.length)
// }
// const object = {
//     length: 5,
//     method() {
//         console.log(arguments);
//         arguments[0]()
//     },
// };
// object.method(callback, 2, 3); //3

//? so here what happen when you call argument array which alredy object in itself so its parent will be array and in array length property which is 3

//!t.s. :18:22
//!Question-7-Implement calc

// var calc = {
//     total: 0,
//     add(a) {
//         this.total = this.total + a;
//         return this;
//     },
//     multiply(a) {
//         this.total = this.total * a;
//         return this;
//     },
//     subtract(a) {
//         this.total = this.total - a;
//         return this;
//     },
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total); //?30

//?so we have to make function which is add n number of operation . so we make toatl first is 0
//? also we return this because we want all object and then next operation apply with that object