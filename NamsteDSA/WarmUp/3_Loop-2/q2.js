//?Question-2-w.a.f that returns number of negative number of an array

let arr2 = [2, -9, 17, 0, -1, -10, -4, -8];
let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function negativeArr(arr) {
    let countNegative = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            countNegative++
        }
    }
    return countNegative;
}


console.log(negativeArr(arr2)); //5
console.log(negativeArr(arr)); //3