console.log("call bind apply");

//!Notes
/*
Question 15: Call Method Polyfill
Explanation:
A polyfill for the call method is provided, allowing a function (purchaseCar in this case) to be invoked with a specific context (car3) and arguments ('₹' and '60,00,000').

Question 16: Apply Method Polyfill
Explanation:
A polyfill for the apply method is provided, allowing a function (purchaseCar) to be invoked with a specific context (car2) and an array of arguments (['₹', '50,00,000']).

Question 17: Bind Method Polyfill
Explanation:
A polyfill for the bind method is provided, allowing a function (purchaseCar) to be bound to a specific context (car1) and arguments ('₹' and '1,00,00,000'). The bound function is then invoked to make a purchase.

*/



//! Question 1: What is Call ?
// The call method in JavaScript is used to invoke a function with a specified this context and arguments individually.
// It accepts the context object as the first argument followed by individual arguments.

//?CODE
// var obj = { name: "john" };
// function sayHello(age, profession) {
//     return "Hello My Name is " + this.name + " My age is " + age + " i am " + profession;
// }
// console.log(sayHello.call(obj, 24, "Frontend Developer")) //?Hello John My Age is 24

//?in this example
//- context means give reference to function
//- here this keyword refer to window but we have to get name varible which is in object so that we use call and refer obj for the context
//- callmethod pass contect and argument


//!2:13
//! Question 2: What is Apply ?

//- apply work same as call .just the difference is apply take any argument as form of array
//- The apply method in JavaScript is similar to call but accepts arguments as an array.
//- It is used to invoke a function with a specified this context and an array of arguments.

//?CODE
// var obj = { name: "john" };
// function sayHello(age, profession) {
//     return "Hello My Name is " + this.name + " My age is " + age + " i am " + profession;
// }
// console.log(sayHello.apply(obj, [24, "Frontend Developer"])) //?Hello My Name is john My age is 24 i am Frontend Developer

//?Wrong way
//console.log(sayHello.apply(obj, 24, "Frontend Developer")) //?Uncaught TypeError: CreateListFromArrayLike called on non-object


//!2:56
//! Question 3: What is bind ?
//The bind method in JavaScript is used to create a new function with a specified this context.
//It doesn't immediately execute the function but returns a new function that can be invoked later.
//it use for good Resuability and readbaility

//?CODE
// var obj = { name: "john" };
// function sayHello(age, profession) {
//     return "Hello My Name is " + this.name + " My age is " + age + " i am " + profession;
// }
// const bindFunc = sayHello.bind(obj)
// console.log(bindFunc(24, "FE"))
// console.log(bindFunc(28, "SDE"))

//!4:10
//! Question 4: What is Output ?
// The first console.log outputs "dipen is 24" because call immediately invokes the function with the specified context and arguments.
// The second console.log outputs the bound function because bind creates a new function but doesn't execute it.

//?CODE
// const person = { name: "Dipen" };
// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 24)) //?dipen is 24

// const ans = sayHi.bind(person)
// console.log(ans(24)) //? Dipesn is 24

// console.log(sayHi.bind(person, 24)) //? give function body which we can use

//!5:14
//! Question 5: call with function inside object?

//?CODE
// const age = 10;
// var person = {
//     name: "john",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     },
// };
// var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); //?24
// console.log(person.getAge.apply(person2)); //?24
// console.log(person.getAge.bind(person2)()); //?24

//?In this Example

//The call method is used to invoke the getAge function of the person object with a different context(person2).It returns the age property of person2, which is 24.
// - person.getAge.call(person2) => 24
// - first we called getAge function and then call method with person2
// - so this.age in getAge() will be refer first person object .but due to call(person2) now it refer person2 Object

//!6:59
//! Question 6: What is the Output?

//The first console.log outputs "🥑" because data.getStatus() returns the status property of the data object.
// The second console.log output "😎" because data.getStatus.call(this) uses call to explicitly set the context to the global object, accessing the same status property.

//?CODE
// var status = "😎";

// setTimeout(() => {
//     const status = "🥰";

//     const data = {
//         status: "🥑",
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus()); //🥑
//     console.log(data.getStatus.call(this)); //😎
// }, 0)

//!8:45
//!Question 7: Call printAnimals such that it prints all animals in object
//The printAnimals function is invoked using call within a loop to print each animal's species and name from the animals array with the correct index.

//?CODE
// const animals = [
//     { species: "lion", name: "king" },
//     { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + " : " + this.name)
//     };
//     this.print();
// }

//?Solutions
// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i],i)
// }

//- we want print printAnimals.call(animals[i],i)
//- we dont directly access normal call method to array of objects so we created for loop to get acces of array of object
//- as per our data  we want all object species and name one by one so we created animals[i] so we can provide of all object one by one
//- as per data we want index for our data # + i =======>animals[i],i
//- animals[i] => for giving context means objects one by one || i ----> is for the data index

//!10:40
//!Question 8: append an array into another array
// The apply method is used to push all elements of the elements array into the array using the spread operator(...elements).

//?CODE
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements)
// console.log(array); //["a","b",0,1,2]

//so here push is now working array[] because we take this context as an array =>array.push.apply(array)
// now take arguments and push that argument in array[] one by one  so => array.push.apply(array,elements)

//!12:36
//!Question 9: USING APPLY TO ENCHNACE BUILt IN FUNCTION
// The apply method is used to find the maximum number in the numbers array by passing the array as arguments to Math.max.

//?Find min/max number into array
//?CODE
// const numbers = [5, 6, 2, 3, 7, 0, 100];
// console.log(Math.min.apply(null, numbers)) //0
// console.log(Math.max.apply(null, numbers))  //100

//?- in this Example
//- so here numbers cant go in Math.min() as argument
// - but we can apply method and take argument as in form of array numbers[]
//- here we dont need any reference for get any varible so context is null ....so apply(null, numbers)

//!14:05
//!Question 10:BOuND FUNCTION

//?Code
// function f() {
//     console.log(this);
// }
// let user = {
//     g:f.bind(null),
// }
// user.g(); //? window object

// A bound function is created using the bind method.In this case, f is bound to null, and the resulting function is assigned to user.g.
//so here f.bind(null) is refere to another () and that refer to window
// so when we call user.g() it refer window object

//!15:00
//! Question 11: Bind Chaining ?
//Bind chaining involves calling bind multiple times on a function.However, only the first bind call is effective in setting the this context.Subsequent bind calls have no effect.

// function f() {
//     console.log(this.name)
// }
// f = f.bind({ name: "john" }).bind({ name: "Ann" });
// f();//?John

//- once function is bind with particular object then its always bound with that object
//- function which bound with bind keyword can not be rebound

//!15:54
//!Question 12: Fix the code
//- The checkPassword function prompts for a password and calls either loginSuccessful or loginFailed based on the input.
//- bind is used to ensure that this inside loginSuccessful and loginFailed refers to the user object.

//?CODE
// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");
//     if (password == "coder coder") success();
//     else failed();
// }
// let user = {
//     name: "dipesh joshi",
//     loginSuccessful() {
//         console.log(`${this.name} loggod in`);
//     },
//     loginfailed() {
//         console.log(`${this.name} failed to loggod in`);
//     },
// };
// checkPassword(user.loginSuccessful.bind(user), user.loginfailed.bind(user))

//?In This Example
//so here in this we have callback function for success and failed .
//but in checkPasword() have find name in global object but could not have so that how our callbacks this.name works so for that
// we bind our callback with bind and refer(context given to) user{} for name

//!18:11
//!Question 13: Partial application for login
//The checkPassword function is modified to accept two callbacks, ok and fail.
//The login method in the user object is then passed as arguments to askPassword, but the specific partial application is not provided.

//?CODE
// function checkPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "coder coder") ok();
//     else fail();
// }
// let user = {
//     name: "dipesh joshi",
//     login(result) {
//         console.log(this.name + (result ? " login succesfull" : " login failed"))
//     },
// };
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

//we have suppose to return function into checkPassword
//bind give use one function so we bind with the context of user and then we will get the answer
//user.login.bind(user, true) this act like ok()
//user.login.bind(user, true) this act like fail()

//!20:00
//!Question:14:Explicit Binding with arrow Function
//Arrow functions do not have their own this context and instead inherit it from the surrounding lexical scope.
//Therefore, using call or bind with arrow functions doesn't change the context.

//?CODE
// const age = 10;
// var person = {
//     name: "dipesh",
//     age: 20,
//     getAgeArrow: () => console.log(this.age),
//     getAge: function () {
//         console.log(this.age);
//     },
// };
// var person2 = { age: 24 };

// person.getAgeArrow.call(person2); //?undefined
// person.getAge.call(person2); //?24

//!22:00
//!Question:15:Pollyfill for call method