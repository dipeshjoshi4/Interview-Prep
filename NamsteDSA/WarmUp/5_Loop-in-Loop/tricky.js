
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