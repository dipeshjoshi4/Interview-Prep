//? write a function that give you smallest number

let arr = [0, 5, 6, 7, 9, 100, -1];

function smallest() {
    let smallestNumber = Infinity          //?YOU CAN WRITE let smallestNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }
    }
    return smallestNumber;
}

let res = smallest();
console.log(res); //-1