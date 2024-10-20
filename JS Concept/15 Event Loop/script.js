

//!Before understanding eventloop lets understand what are things are affected by

//?CODE:1
// console.log("1")
// console.log("2")
// console.log("3")
//?this code is executed synchronous way thats why printed 1 2 3 line by line

//?CODE:2
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// },0)
// console.log("3");
//? this code is executed Asynchronous way thats why printed 1 3 2 line by
//?what is the reason behind code 2 work Asynchronous way. thats why we have understand Event loop

//!Event loop

// The Event Loop in JavaScript is a mechanism responsible for managing asynchronous behavior in a single - threaded environment.It acts like a traffic controller, ensuring tasks are executed in an orderly manner by processing pending tasks in queues(microtasks and macrotasks).

//- for understanding it goes to this website  => https://www.jsv9000.app/

//Question- js single thread language but how ? => so you to explain all the pointes below mention

//? take this Synchronous code as Example see how it works

// function fifth() {
//     console.log("reach the end")
// }
// function fourth() { fifth() }
// function third() { fourth() }
// function second() { third() }
// function first() { second() }
// first()

//? Now Asynchronous Code

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// },0)
// console.log("3");

//?Undestanding of this Asynch code

// 1. first clg(1) is executed
// 2. async task goes into Task Queue untill call stackn is empty
// 3. second clg(2) is executed
// 4. now clg(1) and clg(2 both executed so the call stack empty
// 5. async code comes in call stack then its executed .
// 6. after all this call stack is again empty

//?Notes -
// js single thread language .
// its can not wait to for any operation to complete.so its first move on to the synchronours part then its move on to async part
// in call stack = first in last out
// in Task Queue = First in first OUt

//? What is Task Queue
//-  while executed synchronous code all the asynchoronus code will be go in task queue
// - async code means what is not part of js but its all the browser web api and Dom events. all the window object


//? Different kind of ASYNC CODE
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then(function a(response) {
//         console.log("Fetch Completed :",response[0])
//     })
//     .catch(function c(error) {
//         console.error("Fetch Error : ",error)
//     })

// Promise.resolve().then(function b() {
//     console.log("Promise Resolved")
// });

// Promise.reject().catch(function c() {
//     console.log("Promise Reject")
// })

//?Understanding code

//callstack queue => which handle callback
//microtask queue => who handle the more priority task then callback like Promise()
//callback queue => who handle dom interaction ,asyncode like setTimeout means a browser web API

// so like old code first synchronouse code executed and then go for async code
//async code promise will be go in micro task queue and
//first promise which organize data from json and document in format => .then((res)=>res.json) => executed => vanish
//then func a comes from microtask to callstack => a() => executed => vanish
//?if the resolve not happen => goes to reject and do the same
//then func a comes from microtask to callstack => c() => executed => vanish

//!How event lopp works when all the queue fill with something

//?CODE
// console.log("start");
// setTimeout(() => {
//     console.log("Inside SetTimeout(TaskQueue)")
// }, 0)
// Promise.resolve().then(() => {
//     console.log("Inside Promise (microTask)");
// })
// console.log("End")

//?Understanding code

//1- run syncron code run and executed
//clg(start) execute
//2 -goes seTimout in task queue
//3-goes into Microtask queue
//4- clg(end) execute
//5- microtask comes first proroty when the callstack is empty so promise come resolve executed and call stack empty
//5-now  callstack is empty so setTimeout come code executed and call stack empty

//start
//end
//inside Promise (microTask)
//inside setTimeout (TaskQueue)

//!-----------Interview Question

//!-Que-1-Event loop

//The Event Loop in JavaScript is a mechanism responsible for managing asynchronous behavior in a single - threaded environment.
//It acts like a traffic controller, ensuring tasks are executed in an orderly manner by processing pending tasks in queues(microtasks and macrotasks).

//!Ques 2 - Why do we need the event loop to manage these task queue and microtask queue ?
//The event loop is necessary to handle asynchronous operations in JavaScript effectively.
//It manages task queues and microtask queues to ensure that tasks are executed efficiently without blocking the main thread.

//?Example
// console.log("start");
// setTimeout(() => {
//     console.log("Inside SetTimeout(TaskQueue)")
// }, 0)
// Promise.resolve().then(() => {
//     console.log("Inside Promise (microTask)");
// })
// console.log("End")

//?Note : here we look at setTimeout is 0 time that doesnt mean it execute first because priority queue which micro task queue dose not have that function.its all because of event loop


//!Ques 3 - What is the output?
// This is because the blockMainThread() function blocks the main thread for approximately 3 seconds before logging "running.."
// and then "End" sequentially.
// when we fetching Api genrally we dont this kind of code we use webapi browser given function so that our code will be handle by event loop and it cant block our main thread

//?CODE
// blockMainThread();
// console.log("start");
// function blockMainThread() {
//     const start = Date.now();
//     while(Date.now() - start < 3000) { }
//     console.log("running");
// }
// console.log("End");

//? output
// Start
// running..
// End

//!Ques 4 - What is the output?
//This is because the function d() is executed synchronously, while the setTimeout functions are added to the task queue and executed in the order of their specified timeouts.

//?CODE
// setTimeout(function a() {console.log("a");}, 1000);
// setTimeout(function b() {console.log("b");}, 500);
// setTimeout(function c() {console.log("c");}, 0);
// function d() {
//     console.log("d runs");
// }
// d();

//? output
// d Runs
// c
// b
// a


//! Ques 5 - What's the output?
// This happens because in both versions of the a() function, the setTimeout functions capture the final value of i(which is 3 after the loop completes) due to closure, resulting in all three console.log(i) statements logging 2 after waiting for their respective timeouts.

//? CODE
// function a() {
//     for (var i = 0; i < 3; i++){
//         setTimeout(function log() {
//             console.log(i)
//         },i*1000)
//     }
// }
// a()

//? output
// 2
// 2
// 2
///task queue - log()    log()    log()
//               iref     i ref    i ref
// if there is let insted of var . so let have block scope closure and the out will be 0 1 2



//! Ques 6 - What's the Output?
//This occurs because promises and their respective then handlers are executed as microtasks, following the microtask queue's order, and then the setTimeout callback runs as a macrotask after the microtasks are completed.

//?CODE
// Promise.resolve()
//   .then(function a() {
//     Promise.resolve().then(
//       setTimeout(function d() {
//         console.log("d Runs");
//       }, 0)
//     );
//     Promise.resolve().then(function e() {
//       console.log("e Runs");
//     });
//     throw new Error("Error Occured!");
//     Promise.resolve().then(function f() {
//       console.log("f Runs");
//     });
//   })
//   .catch(function b() {
//     console.log("b Runs");
//   })
//   .then(function c() {
//     console.log("c Runs");
//   });

//? output
// e Runs
// b Runs
// c Runs
// d Runs
//Task queue - d()
//micro Task - e() b() c()
//call stack - a() comes and execute

//! Ques 7 - What's the Output?
// This happens because the pause function returns a promise that resolves after 1000 milliseconds, and the then handler calculates the time difference between the start and end times, logging "resolved: 1.3" after approximately 1.3 seconds.

//?CODE
// function pause(millis) {
// return new Promise(function p(resolve) {
//     setTimeout(function s() {
//         resolve("resolved");
//     }, millis);
// });
// }

// const start = Date.now();
// console.log("Start");

// pause(1000).then((res) => {
//     const end = Date.now();
//     const secs = (end - start) / 1000;
//     console.log(res, ":", secs);
// });

//?Output
// Start
// resolved: 1.5

// Call Stack      - pause(1000)  p(resolve)
// MicroTask Queue -
// Task Queue      - s()



