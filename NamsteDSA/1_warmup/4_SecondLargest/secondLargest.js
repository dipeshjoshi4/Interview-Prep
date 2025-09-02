
//? write a function that returns the second largest number from an
let arr = [4, 9, 9, 8, 0, 2, 8, 7, 7, 1];
// let arr = [4];

function secondLargest() {

    if (arr.length < 2) {
        return null;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

let result = secondLargest(arr);
console.log(result); //8


//?Corner Case
//always ask interviewer to is ther any corner case like -> and if interviewer say yes then implement that logic on your code
//  array is empty or array is less then 2 elements
//  if the minus element in array then what !!!
//  what if duplicate element in the array ===>  else if (arr[i] > secondLargest && arr[i] != firstLargest) {
