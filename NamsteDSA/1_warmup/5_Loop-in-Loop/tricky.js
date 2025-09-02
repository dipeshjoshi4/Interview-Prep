
//!--------------loop in loop tricky example-----------------------

//?Example-1
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log(i, j)
//     }
// }
//?OUTPUT
// 1 0
// 2 0
// 2 1

//?Example-2
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log("i=" + i + "j=" + j)
//     }
// }
//?OUTPUT
/*
00

10
11

20
21
22

30
31
32
33

40
41
42
43
44

*/

//?Example-3
// for (let i = 0; i < 3; i++) {
//     for (let j = i; j > 0; j--) {
//         console.log(i, j)
//     }
// }
//?OUTPUT
/*
11
22
21
*/

//?Example-4
for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(i, j)
    }
}
//?OUTOUT
/*
00
11
10
22
21
20
*/

//! till last -10:27