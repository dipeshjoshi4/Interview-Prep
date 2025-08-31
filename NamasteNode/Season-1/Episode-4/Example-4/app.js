
// const { calculateSum, calculateMultiply } = require("./calculate/index")
const { calculateSum, calculateMultiply } = require("./calculate")

const util = require('node:util');


var a = 10
var b = 20

calculateMultiply(a, b);

calculateSum(a, b)

const data = require("./data.json");
console.log(data);