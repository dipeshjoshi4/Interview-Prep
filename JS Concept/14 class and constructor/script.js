// class launch in es6 version of js

/*

Question 1 - Explain the difference between a class and an object in JavaScript.
Explanation: 
A class is a blueprint that defines the structure and behavior of objects.
Objects are instances of classes that possess properties and methods defined by the class.

Question 2 - What’s the Output?
Explanation: 
The output will be:
console.log(square.area()); // 25
console.log(rect.area()); // 24
Here, `square` and `rect` are instances of the `Rectangle` class, and `area()` calculates their areas accordingly.

Question 3 - How does inheritance work in JavaScript classes?
Explanation: 
Inheritance in JavaScript classes is achieved using the `extends` keyword.
It allows a subclass (child class) to inherit properties and methods from a superclass (parent class).

Question 4 - What’s the Output?
Explanation: 
The code will result in an error: `Uncaught SyntaxError: A class may only have one constructor`.
JavaScript classes can only have one constructor, so having multiple constructor declarations in the `Employee` class causes a syntax error.

Question 5 - Which approach is better and why?
Explanation: 
The second approach is better because it registers the `getFullName` method in the prototype, making it more memory-efficient than the first approach, which creates a closure for each object containing the method.

Question 6 - Implement this -
Explanation: 
The `Calculator` class defines methods for basic arithmetic operations (`add`, `subtract`, `multiply`, `divide`) and returns the result after each operation.
Method chaining is used to perform multiple operations in sequence.

Question 7 - Inheritance and Polymorphism
Explanation: 
The `Shape` class has an `area()` method that returns 0 by default.
Subclasses `Circle` and `Square` inherit from `Shape` and override the `area()` method to calculate their respective areas (circle's area using πr^2 formula and square's area using side * side formula).

Question 8 - What are Getters and Setters in JS?
Explanation: 
Getters and setters are methods used to control access to the properties of a class.
They allow for more controlled modification and retrieval of property values, such as incrementing likes in a video or ensuring certain conditions are met before setting a property value.

*/

//?Class Defination
//class is the blueprint of object.they have method and property.which define their behaviour and charcterstics of that objects

//?classes Usecase
//- class come to us a complete bundel from which
//- we can create object,
//- we can create constructor inside of objects
//- we can create define function
//- we can return something from it

//!Example:1

//now this class is syntax like object have method meand function intro and properties come from constructor
//class teacher(x,y) dont have any input values in there().
// so we use constructor so if you want then take input from user and bind with your class.
//- whenever new object created (here coder) .this constructor job is provide this property
// class Teacher {
//     constructor(name, channel) {
//         this.name = name;
//         this.channel = channel;
//     }
//     intro() {
//         return `Hey its ${this.name}! and welcome to ${this.channel}`
//     }
// }
// const coder = new Teacher("Dipesh", "Learn Code")


//!Example-2
//?Now try to add new property in this constructor
// class Teacher {
//     constructor(name, channel, likes = 0) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }
//     intro() {
//         return `Hey its ${this.name}! and welcome to ${this.channel}`
//     }
//     like() {
//         this.videoLikes++//?Access in class | you  can access into function like this => this.intro()
//         return `liked this video! Current Likes : ${this.videoLikes}`;
//     }
// }
// const coder = new Teacher("Dipesh", "Learn Code")
// const coder2 = new Teacher("mahesh", "learn offline")

//? so here due to like count increment when the function called.it persist the old count so everytime call we gain incremental value
//? now if we want can make 2 sperate object from one class with our dependent on each other.thats power of js class
// console.log(coder2.like()) //? liked this video! Current Likes: 1
// console.log(coder);        //? Teacher { name: 'Dipesh', channel: 'Learn Code', videoLikes: 0 }
// console.log(coder2);       //? Teacher { name: 'mahesh', channel: 'learn offline', videoLikes: 1 }

//!Example-3
//!Converting to Function Constructors

//?s-1- we need to create constructor because function dont have such freedom to take input as constructor
// function Teacher(name, channel, likes = 0) {
//     this.name = name
//     this.channel = channel
//     this.videoLikes = likes
// }
// //?s-2- class have luxry to define function inside but we dont have so we have to prototype
// Teacher.prototype.intro = function () {
//     return `Hey its ${this.name}! and welcome to ${this.channel}`
// }
// Teacher.prototype.like = function () {
//     this.videoLikes++
//     return `liked this video! Current Likes : ${this.videoLikes}`;
// }
// const coder = new Teacher("Dipesh", "Learn Code")
// const coder2 = new Teacher("mahesh", "learn offline")

//!Inheritance

//!Example

class Teacher {
    constructor(name, channel, likes = 0) {
        this.name = name;
        this.channel = channel;
        this.videoLikes = likes;
    }
    intro() {
        return `Hey its ${this.name}! and welcome to ${this.channel}`
    }
    like() {
        this.videoLikes++//?Access in class | you  can access into function like this => this.intro()
        return `liked this video! Current Likes : ${this.videoLikes}`;
    }
}
const coder = new Teacher("Dipesh", "Learn Code")
const coder2 = new Teacher("mahesh", "learn offline")