console.log("Hello Wolrd");

var a = 1078698;
var b = 20986;
setTimeout(() => {
    console.log("setTimeout called ASAP Rn")
}, 0);

setTimeout(() => {
    console.log("setTimeout called after me 3 second")
}, 3000);

function multiplyFn(x, y) {
    const result = a * b;
    return result
}
var c = multiplyFn(a, b)
console.log("multify function answer is :", c);

//?Output
/*
Hello Wolrd
Multify function answer is : 226357556228
setTimeout called ASAP Rn
setTimeout called after 3 second
*/