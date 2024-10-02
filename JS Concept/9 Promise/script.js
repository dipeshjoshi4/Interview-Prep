
console.log("Promise");


/*

Question 1: What is Output ?
Explanation : It will output "start", then "1", then "end", and finally "2".This is because the Promise is resolved asynchronously, so the then callback will be executed after the synchronous code finishes executing.

Question 2: What is Output ?
Explanation : It will output "start", then "1", then "3", then "end", and finally "2".The Promise is still resolved asynchronously, so the then callback will be executed after the synchronous code finishes executing.

Question 3: What is Output ?
Explanation : It will output "start", then "middle", then "1", then "end", and finally "success".The Promise inside the function fn is resolved asynchronously, so the then callback will be executed after the synchronous code finishes executing.

Question 4: What is Output ?
Explanation : It will output "Error 1" and "Success 4".Since the Promise is rejected in the job function, it will skip the then callbacks and go directly to the first catch callback.

Question 5: What is Output ?
Explanation : It will output "success", "error", "Error caught", and finally "success".The first Promise resolves successfully, then the second Promise is rejected, triggering the catch callback.After that, it continues with the then and catch callbacks accordingly.

Question 6: What is the Output ?
Explanation : It will output "success", "error", "Defeat", "error", and finally "Error caught".The first Promise resolves successfully, then the second Promise resolves with a value that doesn't match 'victory', triggering the catch callback and throwing an error.

Question 7: Promises Chaining
Explanation: It will output "First!".The second Promise resolves to the first Promise itself, so it simply returns the resolved value of the first Promise.

Question 8: Rewrite this example code using async / await
Explanation: The code is already rewritten using async / await.It uses async function to define an asynchronous function and await to wait for the Promise to resolve.

Question 9: Solve Promise Recursively
Explanation: It will output "Subscribe to Roadside Coder", "Like the Javascript Interview Questions video", and finally "Share the Javascript Interview Questions video".The promRecurse function recursively processes each Promise in the array and logs the resolved value.

Question 10: Promise Polyfill
Explanation: The Promise Polyfill is a custom implementation of the Promise class. It provides basic functionalities like then, catch, resolve, and reject.The example demonstrates how to create and use a Promise using the custom Polyfill.

*/

// we asked data from api we ask our data from frontend and if we get some data and means promise fulfilled and we display to user
//but if it doesnt get data means some error we display some error

//Synchronous vs Asynchronous Code

//! Synchronous Code
// console.log("start");
// console.log("my name is dipesh joshi");
// console.log("finish");

//! ASynchronous Code
//?Example-1
// console.log("start");
// setTimeout(() => {
//     console.log("my name is dipesh joshi");
// },1000)
// console.log("finish");

//- Synchronous code always run first and then async code run in js

//!Callback

//?Example-1

// console.log("start");
// function importentAction() {
//     setTimeout(() => {
//         return `subscribe to ${username}`;
//     }, 1000);
// }
// const message = importentAction("Coder");
// console.log(message)
// console.log("stop");

//?OUTPUT
//start
//undefined => because importanAction() give undefiend because in async function and so message dont any output and get undefiend
//stop

//?Example-2
// console.log("start");
// function importentAction(username, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${username}`)
//     }, 1000);
// }
// const message = importentAction("coder", function (message) {
//     console.log(message);
// })
// console.log("stop");

//?OUTPUT
//start
//stop
//subscribe to coder

//?Example - 3 -> withot dependecy 2 function with callback call

// console.log("start");

// function importentAction(username, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${username}`)
//     }, 2000);
// }
// function liketheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`like the ${video} video`)
//     }, 1000);
// }
// function shareTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`share the ${video} video`)
//     }, 1500);
// }

// const message = importentAction("coder", function (message) {
//     console.log(message);
//     liketheVideo("JS ROUND", (cbfunc) => {
//         console.log(cbfunc)
//     })
//     shareTheVideo("JS ROUND", (cbfunc) => {
//         console.log(cbfunc)
//     })
// })

// console.log("stop");

//?here how many more time importentAction() take but its always comes first vecause in message varible first importentAction() call and then liketheVideo() call

//!Callback Hell
//the nesting of calbback makes our code will be become little bit messy .when we working on big code base the no of callback were more.this is weried looking pyramid structure form. this is why its look like pyramid of doom. this concept will call callback Hell because we have so mmany callback nested .so its very hard to read and very hard to understand.for solution of this is called Promise

//!Promise Start 09:20

// promise is basically represent the upcoming complition or failure of async event and its resulting value.
//example : mother and child analogy

//?10:00
//? Example-1

