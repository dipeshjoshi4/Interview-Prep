//?Question-7

/*
        *
      * *
    * * *
  * * * *
* * * * *
*/

let n = 5;
for (let i = 0; i < n; i++) {                    //?For Col  Only
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {      //?For Empty Space Only
        row = row + " _ ";
    }
    for (let k = 0; k < i + 1; k++) {            //?For Print Stars Only
        row = row + " * ";
    }
    console.log(row)
}


//?2nd Solution

// let n = 5;
// for (let i = 1; i <= n; i++) {                    //?For Col  Only
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {            //?For Empty Space Only
//         row = row + " _ ";
//     }
//     for (let k = 1; k <= i; k++) {                //?For Print Stars Only
//         row = row + " * ";
//     }
//     console.log(row)
// }