
//?Question-8

//!t.s. - 13 start


/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/

// let n = 6;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j < i + 1; j++) {
//         row = row + toggle;
//         toggle = toggle === 1 ? 0 : 1
//     }
//     console.log(row)
// }


//?2nd Solution

let n = 6;
for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
}


//?Note

// - here the main thing is toggle became chnage after every iternation but every new loop start toggle is 1