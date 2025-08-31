
const crypto = require("node:crypto")

console.log("Hello Wolrd");

var a = 1078698;
var b = 20986;

// pbkdf2 => password base key deravtive function

//Sync-it will block the call stack of main thread
crypto.pbkdf2Sync("Password", "salt", 500000, 50, "sha512",);
console.log("first key is generated");

setTimeout(() => {
    console.log("call me asap");
}, 0);
//- it will only call after callStack of main thread is empty

function multiplyFn(x, y) {
    const result = a * b;
    return result
}
var c = multiplyFn(a, b)
console.log("multify function answer is :", c);


//?Output
/*
Hello Wolrd
first key is generated
Multify function answer is : 226357556228
call me asap
*/

