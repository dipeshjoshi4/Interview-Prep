let arr = [4, 9, 0, 2, 8, 7, 1];

function secondSmallest() {

 

    let firstSmallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arr[i];
        } else if (arr[i] < secondSmallest ) {
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

let result = secondSmallest(arr);
console.log(result)


