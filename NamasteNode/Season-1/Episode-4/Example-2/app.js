
const obj = require("./sum.js");

z = "non-strict mode" // => it will work because in Common js  module non strict mode  is activate
console.log(z);

var a = 10;
var b = 20;

console.log(obj.x)
obj.calculateSum(a, b)
