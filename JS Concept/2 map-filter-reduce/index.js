//! MAP, FILTER & REDUCE Interview Questions

//? MAP - map method is used for a creating  new array from exisiting one by applying function to each on element of the array
//? parameter are -> num, i, arr

// let nums = [1, 2, 3, 4];

// let multiplyThree = nums.map((num, i, arr) => {
//     return num * 3;
// });

// let multiplyThreePlusIndex = nums.map((num, i, arr) => {
//     return num * 3 + i;
// });

// console.log(multiplyThree);
// console.log(multiplyThreePlusIndex);

//old array is same
// console.log(nums);

//! map and filter diff is
//! map provide array with applying all condition and returns it
//! where filter provide apply condition on each element and give array of who is the statisying the conditions

//?  FILTER: filter method takes each elements in the array and applys conditional statemnt against there.
//?  if the condition gets true element push into the output array.
//?  if the conditions get false element dont push into output array
//? INSHORT : filter returns only those elements who fullfill the provided criteria
//?  parameter are -> num, i, arr


// let nums = [1, 2, 3, 4];
// let moreThenTwo = nums.filter((num) => {
//     return num > 2;
// })
// console.log(moreThenTwo); //[3,4]

// old array is same
// console.log(nums); //[1,2,3,4]


//? REDUCE:most complicated ||  reduce method reduce the value array down to the  one value || it receive 2 things -> 1.callback 2.intial value
//? inshort => recude = [-----array----] => x value
//? the parameter of reduce is accumalator,currvalue,index,array
//? acc is result of the  previous computation
//? if there is no intial value it takes first element of array as intial value for accumulator

//give the sum
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0)
// console.log(sum) //10

//old array is same
// console.log(nums) //[1,2,3,4]

//! All function map reduce and filter can be chaining [ex-5 is example]


//![TIME:05:40 MIN]

//!```````````````````` pollyfills -> how every method created from scratch``````````````````````````````````

//! for MAP Polyfill

//? map gives new array for the create new array we have first blank array thats Why let temp = []
//? prototype  =>  adding myMap function to array methods for this current  js file
//?Map js syntax
//? Array.map((num,i,arr)=>{})

// Array.prototype.myMap = function (callback) {
//     //?map return new array so for creating new array we
//     let temp = []

//     //?we itrate trough each element for loop used //here used this because when we write arr.myMap => that refer this
//     for (let i = 0; i < this.length; i++) {
//         temp.push(callback(this[i], i, this)); //?curreElement,index,array // for the CurreElement and array referes this array
//     }
//     return temp;
// }

//! Pure Polyfill Without Comments
// Array.prototype.myMap = function (callback) {
//     let tempArray = [];
//     for (let i = 0; i < this.length; i++){
//         tempArray.push(callback(this[i], i, this));
//     }
//     return tempArray
// }

//! Example MAP Polyfill

// const nums = [1, 2, 3, 4];
// const useCustom = nums.myMap((num) => {
//     return num * 3;
// })
// console.log(useCustom);

//! for FILTER Polyfill

// Array.filter((num,i,arr)=>{})

// Array.prototype.myFilter = function (callback) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) temp.push(this[i]) //? here is chnage if condition apply then push elment in array so
//     }
//     return temp;
// }

//!Without Comment polyfill
// Array.prototype.myFilter = function (callback) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++){
//         if(callback(this[i],i,this)) temp.push(this[i])
//     }
//     return temp;
// }

//! Example FILTER Polyfill

// let nums = [1, 2, 3, 4];
// let moreThenTwo = nums.myFilter((num) => {
//     return num > 2;
// })
// console.log(moreThenTwo);
// console.log(nums);

//! for REDUCE Polyfill

// Array.reduce(callback,intial value)
// Array.reduce((acc,cur,i,arr)=>{},intial value)

// Array.prototype.myReduce = function (callback, intialValue) {
//     var accumalator = intialValue;
//     for (let i = 0; i < this.length; i++){
            //?if the accumaulator is no value then accumulator take first index value as accumulator and current value get second index value
//         accumalator = accumalator ? callback(accumalator, this[i], i, this) : this[i];
//     }
//     return accumalator;
// }

//! Without Comment Polyfill of Reduce
// Array.prototype.myReduce = function (cb, intialvalue) {
//     let accumulator = intialvalue;
//     for (let i = 0; i < this.length; i++){
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// }

//! Example REDUCE Polyfill

// const nums = [1, 2, 3, 4];
// const sum = nums.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0)
// console.log(sum) 


//! Questions : map vs foreach

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//! Q1 - Return only the names of students in capital

//? Solution 1 : Traditional for() loop
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names)


//? Solution-2- map

// const names = students.map((student) =>  student.name.toUpperCase())
// console.log(names);

//? Solution 3 : forEach()

// let names = []
// students.forEach( student => {
//      names.push(student.name.toUpperCase());
// })
// console.log(names);


//! Q2 - we want to get the details of students who scored more than 60 marks.

// const  details = students.filter((stu) => stu.marks>60 )
// console.log(details)

//! Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.
//? stu.marks > 60
//? stu.rollNumber > 15

// let marks = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15)
// console.log(marks);


//? Q4 - Sum total of the marks of the students

// let totalMarks = students.reduce( ((acc,curr) => acc+curr.marks), 0)
// console.log(totalMarks);


//? Q5 - Get only the names of the students who scored more than 60 marks

// let namesMarks = students.filter((stud)=>stud.marks>60).map((stud)=>stud.name)
// console.log(namesMarks);


//? Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

// let totalMarks = students.map((stu) => {
//     if (stu.marks < 60) {
//         stu.marks += 20;
//     }
//     return stu;
// }).filter(stu => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks); //224




// Question 1: Array.map()
// Explanation: The map() method in JavaScript creates a new array populated with the results of calling a provided function on every element in   the calling array.It doesn't modify the original array but returns a new modified array based on the callback function's logic.

// Question 2: Array.filter()
// Explanation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a filtered array based on the condition specified in the callback function, where only elements that satisfy the condition are included.

//Question 3: Array.reduce()
// Explanation: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.It's often used for aggregating data, such as calculating a sum, by iterating through the array and accumulating the results based on the logic in the callback function.

// Question 4: Map Polyfill
// Explanation: This code snippet adds a custom implementation of the map() method to the Array prototype.It mimics the functionality of the native map() method by iterating through the array and applying a callback function to each element to create a new array with the modified values.

//Question 5: Filter Polyfill
// Explanation: Similar to the Map Polyfill, this code adds a custom implementation of the filter() method to the Array prototype.It iterates through the array and applies a callback function to each element, returning a new array containing only the elements that meet the specified condition in the callback.

// Question 6: Reduce Polyfill
// Explanation: This snippet introduces a custom implementation of the reduce() method for arrays.It iterates through the array, applying a callback function that performs reduction or aggregation operations, similar to the native reduce() method, and returns the final accumulated result.

// Question 7: map vs foreach
// Explanation: This section compares the usage of map(), forEach(), and traditional for () loops for processing data in an array of student records.It demonstrates how each method can be used to achieve specific tasks, such as transforming data, filtering based on conditions, and aggregating information, highlighting the differences in syntax and approach between these array iteration methods.