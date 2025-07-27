
//?find the search element

let arr = [3, 7, 8, 9, 12, 20];

function searchElement(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1
}


console.log(searchElement(arr, 8));