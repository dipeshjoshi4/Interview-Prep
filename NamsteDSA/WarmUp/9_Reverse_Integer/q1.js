//?Q1-Reverse Integer
//- Corner Case => sign 32 bit => range [-2^31, 2^31 - 1]

// LeetCode -> https://leetcode.com/problems/reverse-integer/

//?Postive Case
// function revrerse(n) {
//     let rev = 0;
//     while (n > 0) {
//         let last = n % 10;
//         rev = (10 * rev) + last;
//         n = Math.floor(n / 10);
//     }
//     return rev
// }
// console.log(revrerse(1234));

//?Now Taking Care Of Negative Number Too

function reverese(n) {
    let rev = 0;
    let nCopy = n;
    n = Math.abs(n)  //Hnadling Negative Case
    while (n > 0) {
        let last = n % 10;
        rev = (10 * rev) + last;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2, 31); //limit = 2**31 
    if (rev < -limit || rev > limit) return 0; //handiling range of integer 
    return (nCopy < 0) ? (-rev) : (rev)
}
console.log(reverese(25));
console.log(reverese(-1234));