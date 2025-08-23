
console.log("SUM module executed");

var x = "Hello World"

function calculateSum(a, b) {
    let sum = a + b;
    console.log(sum);
}

module.exports = {
    x: x,
    calculateSum: calculateSum,
}