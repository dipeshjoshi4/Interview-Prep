//?question-3-write a larest number from an array

let arr = [5, 0, 7, 10, 8, 17, 1];

function largestNumber(arr) {
    let largest = -Infinity                    //?YOU CAN WRITE  let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNumber(arr));//17