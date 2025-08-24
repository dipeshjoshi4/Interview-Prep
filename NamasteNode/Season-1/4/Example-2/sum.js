
console.log("SUM module executed");

var x = "Hello World"

function calculateSum(a, b) {
    let sum = a + b;
    console.log(sum);
}

//?OLd Way
// module.exports = {
//     x:x,
//     calculateSum: calculateSum,
// }

//?New Way
// module.exports = { x, calculateSum, }

//?Another New Way
module.exports.x = x;
module.exports.calculateSum = calculateSum

//?thios is because we console.log(module.exports) are nothing but a {} -> Empty Object