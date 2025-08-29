//? Problem Statement:
// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

//?Requirements:
// Handles both positive and negative integers.
// Return 1 if n is 0(since 0 is a single - digit number).

//? Examples:
// Input: 259
// Output: 3

// Input: -1035
// Output: 4

// Input: 0
// Output: 1


//?Example-1
// function result() {
//     let n = 259;
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10); //To Avoid The Decimal
//         count++;
//     }
//     return count;
// }
// console.log(result());

//?Example-2
// function countDigits2(n) {
//     let count = 0
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++
//     }
//     return count;
// }
// let num2 = 655445;
// let result1 = countDigits2(num2);
// console.log(result1); //6



//?Example-3     |corner Case - 0 | if n is 0 then answer comes 0 but its Actual Answer Should be 0

// function countDigits(n) {
//     if (n == 0) return 1
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++
//     }
//     return count;
// }
// let num3 = 0
// let result = countDigits(num3)
// console.log(result); //1

//?Example-4     |corner Case - Negative Number | if n is Negative(-2023) then answer comes 0 but its Actual Answer Should be 4

function countDigits3(n) {
    n = Math.abs(n)    // converting negtive number into positive
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count;
}
let num4 = -2023
let result = countDigits3(num4);
console.log(result); //4