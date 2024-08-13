//suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

//! Method-1
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}
console.log(addUpTo(6)) //21

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//!Method-2
function SumWithoutLoop(n) {
    return n * (n + 1) / 2
}
console.log(SumWithoutLoop(6)) //21

//Messure
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//? Now. Both are working solution. Which Method is Better?

//faster ?
//less memory - intensive ?
//More Readble?
//Brevity -> minimize the number of charcter

//now main factor is Faster and less memory due to this some time readbility have lost but thats how efficient the code is.so always have balanced


// The Problem With Time

//-Different Machine Will Record different times
//- same machine will record different times so its not precious
//- for fast algo, speed mesurements may not be precious enough?

//- timing function is take time  and we dont go for wait to check different method which is less and apply to production code 
//- timing of your code is not bad idea but if there is better then that so we could go for Big 0 notation 