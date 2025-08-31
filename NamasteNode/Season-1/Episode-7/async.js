
const fs = require("fs");
const https = require("https");


console.log("Hello Wolrd");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("fetched data successfully")
});

setTimeout(() => {
    console.log("setTimeout called after 5 second")
}, 5000);

//async 
fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File Data:", data);
});


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
File Data : this is file data
fetched data successfully
setTimeout called after 5 second
*/