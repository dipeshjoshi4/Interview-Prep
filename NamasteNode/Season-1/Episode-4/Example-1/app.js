
require("./xyz.js");

const calculateSum = require("./sum.js");

var name = "Namste NodeJS";
var a = 10;
var b = 20;

console.log(globalThis === global);  //true

calculateSum(a, b)
