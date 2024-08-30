console.log("Object");

//?Code Exampel
// const User = {
//     name: "coder",
//     age:24,
// }

//?access Property
// console.log(User.name)

//?modify Property
// User.name = "Dipesh";
// console.log(User);

//?delete Property
// delete User.age;
// console.log(User);

//! NOTES

/*

Question 1: Delete keyword in Object
Explanation: The code uses the delete keyword to delete a property from an object, but since the property is immediately returned afterward, the delete operation has no effect, and the property still exists in the object.

Computed Properties
Explanation: Computed properties allow for dynamic property names in object literals, using expressions inside square brackets. This feature is useful for creating object properties based on variable values or expressions.

Looping in Object
Explanation: The for...in loop in JavaScript iterates over all enumerable properties of an object, allowing access to both keys and values, which can be useful for various operations involving objects.

Question 2: Output
Explanation: The code attempts to create an object with duplicate keys (a). In JavaScript, object keys are unique, so when a key is repeated, the last occurrence overwrites the earlier ones. Therefore, console.log(obj); will output { a: 'three', b: 'two' }.

Question 3: Create a function multiplyByTwo(obj)
Explanation: The function multiplyByTwo(obj) multiplies all numeric property values of the provided object obj by 2, using a for...in loop to iterate over the object's properties and check for numeric values.

Question 4: Output (Important)
Explanation: JavaScript automatically converts object keys to strings. In this code, both b and c are converted to [object Object] (string representation of an object), so a[b] and a[c] refer to the same property. The final value is 456.

Question 5: JSON.Stringify and JSON.parse
Explanation: JSON.stringify converts a JavaScript object to a JSON string, while JSON.parse converts a JSON string back to a JavaScript object. These methods are commonly used for data serialization and deserialization.

Question 6: Output
Explanation: The spread operator (...) in an array literal spreads the characters of the string "Lydia" into individual array elements, resulting in ['L', 'y', 'd', 'i', 'a'] when logged to the console.

Question 7: Output
Explanation: The spread operator (...) in object literals spreads the properties of one object into another, creating a new object with combined properties. The output will be { name: 'Lydia', age: 21, admin: true }.

Question 8: Output
Explanation: JSON.stringify can take an array of properties to include in the JSON string. In this case, only the properties 'level' and 'health' will be included in the output.

Question 9: Output
Explanation: The perimeter method uses an arrow function (() =>) that doesn't have its own this context, leading to this.radius being undefined and resulting in NaN (Not a Number) when called.

Destructuring in object
Explanation: Destructuring allows extracting specific properties from an object. In this code, const { fullName: { firstName } } = user; extracts the firstName property from user.fullName.

Question 11: Output
Explanation: The function getItems has a syntax error because the rest parameter (...args) should be the last parameter in the function's parameter list. It will throw a syntax error when executed.

Question 12: Output
Explanation: Objects in JavaScript are assigned by reference, so changing c.greeting also changes d.greeting since d references the same object as c.

Question 13: Output
Explanation: In JavaScript, objects are compared by reference, so {a:1} == {a:1} and {a:1} === {a:1} will both return false since they are separate objects in memory.

Question 14: Output
Explanation: Arrays and objects are reference types in JavaScript, so setting person to null does not affect the reference stored in members, resulting in the original object being logged.

Question 15: Output
Explanation: The multiply function doubles the number property of the passed object. When called without arguments, it uses a default object { ...value }, which leads to doubling the value each time it's called.
*/

//!TS. 01:11

//!interview Question formed on word delete keyword

// const func = (function (a) {
//     delete a;
//     return a;
// })
// (5);
// console.log(func); //?5

//?delte keyword only works in object propery deletion not  a local variables

//!TS. 02:05

//!add property with different name and access that property with differently => like this video : true
// const user = {
//     name: "Coder",
//     age: 24,
//     "like this video":true,
// }
//! Acces different way property
// console.log(user["like this video"]);
// console.log(user);

//! delete different way property
// delete user["like this video"];
// console.log(user);

//!T.S. ->2:56
//! How can you add dynamically key:value pair in object

// const property = "firstName";
// const name = "Dipesh";

// const user = {
//     [property]: name,
// };
// console.log(user)
// console.log(user.firstName)

//!T.S. ->4:11
//!we want to loop through each of the key and print the values and event the name of the keys

//we could choose normal loop like array

// const user = {
//     name: "dipesh",
//     age: 24,
//     isTotallyAwesome:true,
// }

//for....in Loop

// for (key in user) {
// console.log(key);        //?key //name age isTotallyAwesome
// console.log(user[key])  //?values //dipesh 24 true
// }


//!T.S. ->5:07
//Question-1-What's THe Output?

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three",
// }
// console.log(obj); //? {a:'three' b:'two'}
//?if you have simillar name 2 key with differetn value the first one will be replace dand the last one will be printed with last specified value

//!T.S. ->5:50

//!Question-2- Create a function multiplyByTwo(obj) that multiply all numeric property values of nums by 2

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My Nums",
// };
// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2; //nums[key] = nums[key] * 2
//         }
//     }
// }
// console.log(nums);

//!T.S. ->07:28 Most IMported

//!Question-3-What's The Output of the following code
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]); //456 //? How

//?Answer below

//ok first of all we
//? console.log(a); //?{[object object]:456}
//so whenever you write or assign like this
//? a[b]
//it covert
//? a["[object object]"]
//because b object have alredy have key value pair its not converted into key unless its a string
//so when he tries to converts into string its turn out to be object object
//so both of a[b] and a[c] become => a["[object object]"] first assign 123 and then overlap 456 value answer is 456

//!T.S. ->08:56

//! Question-4-What's JSON.stringify and JSON.parse ?

// const User = {
//     name: "Dipesh",
//     age:24,
// }

//object into string

//? Object Print
//console.log(User);

//? object------>string
// const strObj = JSON.stringify(User)
//console.log(strObj);

//? undefined --> because it not anymore object so
//console.log(strObj.name);

//? so string ----> object
//console.log(JSON.parse(strObj)) //?Object

//?Where Can You can use This
//Usecase -> stroing this in local storage

//?Example-1
//?if direct object pass
// localStorage.setItem("test", User)

//?Example-2
//?show the interviewer like this also show what happen we store direct object in localStorage
// const strObj = JSON.stringify(User)
// localStorage.setItem("test", strObj)
// console.log((localStorage.getItem("test"))); //object converted string  print
// console.log(JSON.parse(localStorage.getItem("test"))); //object print

//!T.S. ->11:56
//!Question-5-What's the Output?
// console.log([..."Lydia"]) //(5) ['L', 'y', 'd', 'i', 'a']
//?convert string into different parent in array with spread

//!T.S. ->12:31
//!Question-6-What's the Output
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);
//? {admin: true, name: 'Lydia', age: 21}

//!T.S. ->13:11
//!Question-7-What's the Output
// const settings = {
//     username: "Piyush",
//     level: 19,
//     health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"])
// console.log(data)
//?{"level":19,"health":90}
//? so here stringfy the object setting thos property who were written specifically and ignore username key

//!T.S. ->13:51
//!Question-8-What's the Output

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perameter: () => 2 * Math.PI * this.radius,
// }

// console.log(shape.diameter());  //?20   => normal function this refer that function or object
// console.log(shape.perameter()); //?NaN  => arrrow function this refer to window object

//!T.S. ->15:11
//!Question-9-What is destructuring in Objects ?


//!Normal
//?destructuring means taking out specific property from object like this
// let user = {
//     name: "Piyush",
//     age: 24,
//     welcomFunc: function greeting() {
//         console.log("Hi");
//     }
// }
// const { name  } = user //?{name} is destructuring
// console.log(name) //?Piyush

//!What if there is same name then simply while destructuring do this { name :myName } insted of { name }
// let user = {
//     name: "Piyush",
//     age: 24,
//     welcomFunc: function greeting() {
//         console.log("Hi");
//     }
// }
// const name = "coder";
// const { name: myName } = user
// console.log(myName)

//!Destructuring can perform nested way too
// let user = {
//     name: "Piyush",
//     age: 24,
//     welcomFunc: function greeting() {
//         console.log("Hi");
//     },
//     fullName: {
//         first: "dipesh",
//         second: "joshi",
//     },
// };

// const { fullName:{first} } = user;
// console.log(first)

//!T.S. ->17:00
//!Question-10-What is the output?
// function getItems(fruitList, ...args, favouriteFruit) {
//     return [...fruitList, ...args, favouriteFruit]
// }

//?here we see in the question rest parameter must be last in the parameter list so
// function getItems(fruitList, favouriteFruit, ...args) {
//     return [...fruitList, ...args, favouriteFruit]
// }

// console.log(getItems(["banana", "apple"], "pear", "orange")); //(4) ['banana', 'apple', 'orange', 'pear']

//!T.S. ->18:00
//! Some Question on Object References -> most asked
//!Question-11-What is the output?

// let c = { greeting: "Hey!" };
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); //"Hello"

//? - so here what happens when we pass object  to any variable here is d .its pass whole reference not copy
//? - so answer is Hello

//!T.S. ->19:08
//!Question-12-What is the output?

//?both are false just because both have different adress .object  only same when they are reference in same area
// console.log({a:1}=={a:1});//? false
// console.log({ a: 1 } === { a: 1 });//? false

//? Same Reference: If two variables reference the same object, they will be considered equal:
//? In this case, obj1 and obj2 reference the same object in memory, so the comparison returns true.
// const obj1 = { a: 1 };
// const obj2 = obj1;
// console.log(obj1 == obj2);  // true
// console.log(obj1 === obj2); // true

//!T.S. ->19:50
//!Question-13-What's the output?

// let person = { name: "Lydia" };
// const members = [person];
// person = null;
// console.log(members); //?name:lydia

//but if we modify object properties like this
// personalbar.name = null;
// console.log(members); //name:null

//? Visualizing the Process

//?Before person = null:
// person → { name: "Lydia" }
// members[0] → { name: "Lydia" }

//? After person = null:
// person → null
// members[0] → { name: "Lydia" }

//The key point is that setting person to null only changes what person is pointing to.
//It doesn't affect other references to the same object, like the one stored in the members array.
//Therefore, the object { name: "Lydia" } still exists in memory and is accessible through members[0].

//!T.S. ->20:54
//!Question-14-What's the output?

// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//     console.log((x.number = x.number * 2));
// };
// multiply(); //?20
// multiply(); //?20
// multiply(value); //?20
// multiply(value); //?40

//?Explanation

//here x is take clone of value object so we get number like x.number = 10
//so first 2 answer is 10*2 = 20
// 3rd value object directly pass in x . value object not make clone via spread operator
//so in 3rd answer is 20. b
//but after 3rd number is now 20 and 4th answer is 20*2 = 40

//?Code For Last 2 Operation

//for last 2 operation code is visulize like this
// const multiply = (x ) => {
//     console.log((x.number = x.number * 2));
// };


//!T.S. ->22:34
//!Question-15-What's the output?

// function Chnage(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50,
//     };
//     return person;
// }
// const personObj1 = {
//     name: "Alex",
//     age: 30,
// };
// const personObj2 = Chnage(personObj1)
// console.log(personObj1); //? {name:"Alex", age:25}
// console.log(personObj2); //? {name: "John",age: 50}

//!T.S. ->24:05
//!Question-16-What's shallow copy and Deep copy of object?

//? shallow copy
//when we copy object to naother object .but where we copy  that object have some refernce to original object
//ex:if A Object copied and b object have copied A Object . so b Object have some reference of A object
//when one object refernce hold by another Object


//? Deep copy/Clone
//when we completly clone an object to into another variable called deep copy.where we dont have any refernece of original object

//!T.S. ->24:45
//!Question-17-How to Deep Copy or Clone

let user = {
    name: "Coder",
    age: 24,
};

//?1st way of copy
// const objectClone = Object.assign({}, user) //here in assign as per syntax => first=> target || second => clone obejct name
// objectClone.name = "dipesh" // no affect on original user object because its deep copy
// console.log(objectClone)
// console.log(user)

//?2nd way of copy
// const objectClone = JSON.parse(JSON.stringify(user))
// objectClone.name = "dipesh"
// console.log(objectClone)
// console.log(user)

//?3rd way of copy
// const objectClone = {...user}
// objectClone.name = "dipesh"
// console.log(objectClone)
// console.log(user)