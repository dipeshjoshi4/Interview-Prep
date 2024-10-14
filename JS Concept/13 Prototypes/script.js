

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
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

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
//Explanation :
//The output will be:  ===>  Driving a vehicle | Driving a car
//This is because vehicle.drive() invokes the drive() method from the Vehicle prototype,
//while car.drive() invokes the overridden drive() method in the Car prototype.

//?CODE
// function Vehicle() { }
// Vehical.prototype.drive = function () {
//     console.log("Driving a Vehicle");
// }

// function Car() { }
// Car.prototype = Object.create(Vehical.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function () {
//     console.log("Driving a Car");
// };

// var Vehicle = new Vehical();
// var Car = new Car();

// vehical.drive(); //? Driving a vehicle
// Car.drive(); //? Driving a car


//!Q-2-Explain the difference between __proto__ and prototype in js?
//?__proto__: its a object property . It points to the prototype of an object and is used for inheritance and accessing the prototype chain.
//!CODE
// let nameObj = {
//     fName: "dipesh",
//     lName : "Joshi",
// }
// console.log(nameObj.__proto__); //? it gives the prototype of that particular datatype

//?prototype: It exists on constructor functions to set up inheritance for objects created by that function, defining shared properties and methods for instances.
//!CODE
//inherite the prototype of other constructor functrion =====> Dog.prototype = Object.create(Animal.prototype)
//own constructor property  =================================> Dog.prototype.constructor = Dog
// Add one more property and function (methods) =============> Dog.prototype.bark = function () {console.log("Woof!!");}

//! Ques 3: What is setPrototypeOf ?
//setPrototypeOf is a method used to set the prototype(the object's internal [[Prototype]]) of a specified object to another object or null. It allows changing the prototype dynamically after an object has been created.

//!CODE EXAMPLE

//?Define ProtoType
// var animalPrototype = {
//     sound: function () {
//         console.log("Making a Sound...");
//     },
// };
//?create an object with animalPrototype as its prototype
// var dog = Object.create(animalPrototype); //you will see

//?one more object and with his own different prototype
// var cat = {
//     purr: function () {
//         console.log("Purring...")
//     },
// };
//?prototype of dog it get cats prototype. so we can not seen animal prototype sound function
// Object.setPrototypeOf(dog, cat);
// console.log(dog.purr());  //?Purring...
// console.log(dog.sound()); //?ERROR:dog.sound is not a funbction

//!Ques 4: What is instanceof?
//instanceof is an operator that checks if an object is an instance of a specific constructor or its prototype chain.It returns true if the object is an instance of the constructor or a constructor's prototype chain.

//!CODE

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function () {
//     console.log("My Name is "+ this.name)
// }

// var animal1 = new Animal("Tiger");
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog
// Dog.prototype.bark = function () {
//     console.log("Woof!!");
// }
// var dog1= new Dog("Max", "Labrador")
// console.log(dog1 instanceof Animal); //?OUTPUT->true

//!t.s.->
//!Ques 5: How can you create an object without a prototype in JavaScript ?
//?You can create an object without a prototype by using Object.create(null).
//?This creates an object with no prototype chain, making it free from any inherited properties or methods.

//?CODE
// var obj1 = Object.create(null)
// console.log(obj1.toString())

//!Ques 6: What will be the output of the following code ?
//? The output will be: 10   20     30
//? This is because obj1 is an instance of A with foo as 10, obj2 is an instance of B with foo as 20 (overridden from A), and obj3 is an instance of C with foo as 30 (overridden from both A and B).

//?CODE
/*

function A() { }
A.prototype.foo = 10;

function B() { }
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.foo = 20;

function C() { }
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
C.prototype.foo = 30;

var obj1 = new A();
var obj2 = new B();
var obj3 = new C();

console.log(obj1.foo);//?10
console.log(obj2.foo);//?20
console.log(obj3.foo);//?30

*/

//!t.s.->28:05
//!Ques 7: Deep Clone an object in JS
//? The deepClone function recursively creates a deep copy of an object, including nested objects and arrays, ensuring that the cloned object is completely independent of the original object.
//? - when you copy object at from some place the other place the reference is intact with that

// var obj2 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: [3, 4],
//     },
// };
// var clonedObj = obj2
// clonedObj.a = 3;
// console.log(clonedObj); //?a is 3
// console.log(obj2);      //?a is 3

//?Here the problem is that when we do like this we have copy the reference so that whenever chnage happen it happen both original and duplicate both object. and that we dont want .
//?we want completley copy not by the refernece

//!TWO WAY WE CAN DO THAT

//?1
//?structured deep clone
// var obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: [3, 4],
//     },
// };
// const deepCloneObj = structuredClone(obj1)
// deepCloneObj.a = 25;
// console.log(deepCloneObj) //?25
// console.log(obj1) //?1

//?2
//?manually function for deep

function deepClone(obj) {
    //handle null and non-object types
    if (obj === null || typeof obj != "object") { //null check true then return obj
        return obj;
    }

    //create a new object or array based on the type of the input object
    var clone = Array.isArray(obj) ? [] : {};

    //Iterate through each key in the input object
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
var obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

var clonedObj = deepClone(obj2);
clonedObj.a = 25;
clonedObj.b.c = 40;
console.log(clonedObj);

console.log(obj2);