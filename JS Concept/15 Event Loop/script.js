

/*



Ques 2 - Why do we need the event loop to manage these task queue and microtask queue?
Explanation: The event loop is necessary to handle asynchronous operations in JavaScript effectively. It manages task queues and microtask queues to ensure that tasks are executed efficiently without blocking the main thread.

Ques 3 - What is the output?
Explanation: The output will be:

Start
running..
End

This is because the blockMainThread() function blocks the main thread for approximately 3 seconds before logging "running.." and then "End" sequentially.

Ques 4 - What is the output?
Explanation: The output will be:

d Runs
c
b
a

This is because the function d() is executed synchronously, while the setTimeout functions are added to the task queue and executed in the order of their specified timeouts.

Ques 5 - What's the output?
Explanation: The output will be:

2
2
2

This happens because in both versions of the a() function, the setTimeout functions capture the final value of i (which is 3 after the loop completes) due to closure, resulting in all three console.log(i) statements logging 2 after waiting for their respective timeouts.

Ques 6 - What's the Output?
Explanation: The output will be:

e Runs
b Runs
c Runs
d Runs

This occurs because promises and their respective then handlers are executed as microtasks, following the microtask queue's order, and then the setTimeout callback runs as a macrotask after the microtasks are completed.

Ques 7 - What's the Output?
Explanation: The output will be:

Start
resolved: 1.3

This happens because the pause function returns a promise that resolves after 1000 milliseconds, and the then handler calculates the time difference between the start and end times, logging "resolved: 1.3" after approximately 1.3 seconds.


*/


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

//! js single thread language but how so you to explain all the pointes above mention


