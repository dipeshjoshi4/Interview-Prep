//?write a function thats serches for an element in an array and return the index.if the ele not present then return -1

/*
let arr = [4, 2, 0, 10, 8, 30];
function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}
let result = searchElement(arr, 10);
console.log(result);
*/

//?OUTPUT
// searchElement(arr,4)  => 0
// searchElement(arr,10) => 3
// searchElement(arr,49) => -1

//?write a function that returns number of negative numbers in array

/*
let arr = [2, -9, 17, 0, 1, -10, -4, 8];
function countNegative(arr) {
    let negativeCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount = negativeCount + 1;
        }
    }
    return negativeCount;
}
let result = countNegative(arr);
console.log(result); //?3
*/

//?Write a function that return the largest number in an array
/*
let arr = [5, 0, 7, 10, 8, 17, 12];

function largestNumber() {

    let largestCount = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestCount) {
            largestCount = arr[i]
        }
    }
    return largestCount;
}

let result = largestNumber(arr);
console.log(result); //?17
*/

//?--------------------------------H.W. QUESTION-----------------------------------

//?Write a Function that return the smallest number in an array
/*
let arr = [5, 0, 7, 10, 8, 17, 12];

function findSmallest() {
    let smallest = Infinity; //arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

let result = findSmallest()
console.log(result); //?0
*/