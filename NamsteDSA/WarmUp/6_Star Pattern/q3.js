
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + [j + 1];
    }
    console.log(row)
}


//!till now time stamp = -36.47