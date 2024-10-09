/*



Ques 2: Explain the difference between __proto__ and prototype in JavaScript.
Explanation:__proto__: It points to the prototype of an object and is used for inheritance and accessing the prototype chain.
prototype: It exists on constructor functions to set up inheritance for objects created by that function, defining shared properties and methods for instances.

Ques 3: What is setPrototypeOf ?
Explanation : setPrototypeOf is a method used to set the prototype(the object's internal [[Prototype]]) of a specified object to another object or null. It allows changing the prototype dynamically after an object has been created.

Ques 4: What is instanceof?
Explanation : instanceof is an operator that checks if an object is an instance of a specific constructor or its prototype chain.It returns true if the object is an instance of the constructor or a constructor's prototype chain.

Ques 5: How can you create an object without a prototype in JavaScript ?
 Explanation : You can create an object without a prototype by using Object.create(null).This creates an object with no prototype chain, making it free from any inherited properties or methods.

Ques 6: What will be the output of the following code ?
Explanation : The output will be:
10
20
30

This is because obj1 is an instance of A with foo as 10, obj2 is an instance of B with foo as 20 (overridden from A), and obj3 is an instance of C with foo as 30 (overridden from both A and B).

Ques 7: Deep Clone an object in JS
Explanation: The deepClone function recursively creates a deep copy of an object, including nested objects and arrays, ensuring that the cloned object is completely independent of the original object.

*/

//?Object
// let obj = {
//     name: "dipesh",
//     age: 25,
// }
// - Object prototypes which is given by js in output of every object.Through which we can maniupulate the object and access different properties
//- we can call in console like ---> Object.prototype or objname.__proto__

//?Variable is object
// let num = 10;
// let name = "coder";
// let bool = true;
//all of this diferent kind of datatypes or you could say variable are have object prototype .means its object
// num.__proto__
// name.__proto__.__proto__
// num.__proto__.__proto__

//?function is object
// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2));
//- so function also have prototype of object and with this we cann add key in function and it also end of the day became object
// console.log(add().__proto__) //function prototype
// console.log(add().__proto__.__proto__) //object prototype

//?Prototype Chaining

// let person = {
//     name: "dipesh",
//     age:25,
// }
// console.log(person.alice()); //?ERROR: person.alice() is not function

// let person2 = {
//     name: "dipesh",
//     age: 25,
//     toString: () => {
//         console.log("convert to string")
//     }
// }
// console.log(person2.toString()); //?convert to string

// let person2 = {
//     name: "dipesh",
//     age: 25,
// }
// console.log(person2.toString()); //?[object object]

//- this is all about prototype chaining
//- here toString function find in person object . and then if not there then find in object prototype

//?Example

// let person = {
//     name: "dipesh",
//     age: 25,
// }
// let additional = {
//     name: "dipesh joshi",
//     username: "Coder",
//     alias: function () {
//         console.log(`${this.name} is also know as ${this.username}`);
//     }
// }
// person.__proto__ = additional;//?its kind of inheritance of prototype
// console.log(person.alias()) //? dipesh is also know as Coder

// so here person object first try and search every property inside his object  and if the property or function not person object then he goes to  object prototype .and we here inherit additional object prototype
// so we get some property and execute it

//!-----------------Prototype Inheritance---------------------------

//- Constructor and new keyword is very well known for to understand prototype inheritance
//- function constructor in js used to create some object with some specific property & Methods

//!Example - 1
//! - in this example they make with function constructor & his prototype make object or instance of function

//? - Defined a constructor
// function Animal(name) {
//     this.name = name;
// }

//? - Add a method to this prototype of above function
// Animal.prototype.sayName = function () {
//     console.log("my name is " + this.name);
// };

//? - create instance or object from animal which is containe both of the properties
//? - new keyword creates new object & its sets the constructor function prototype as the prototype of newly created object
//? - means creating new object from Animal function thats Why new Animal()
// var animalName = new Animal("Tiger");  
// console.log(animalName.sayName()) //?My name is Tiger

//!Example-2
//! now from above inheritance we make supply for Dog

//? -  take property of animal class  and name will be handled by Animal()
//? -  Animal.call(this, name); => this passed because we pass the current object context on this
function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
}

//? - it will inherit whatever in Animal Property => Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype = Object.create(Animal.prototype)

//? - but we want dog have their own constructor property so for that => Dog.prototype.constructor = Dog
// Dog.prototype.constructor = Dog

//? - Add one more property
// Dog.prototype.bark = function () {
//     console.log("Woof!!");
// }

//? - create new object out of this Dog with use of new
// var DogName = new Dog("Max", "Labrador")

//?19:32
//?Intwerview Question

//?Question-1-What will be the output of the following code ?
// Explanation : The output will be:
// Driving a vehicle
// Driving a car
//This is because vehicle.drive() invokes the drive() method from the Vehicle prototype, 
//while car.drive() invokes the overridden drive() method in the Car prototype.