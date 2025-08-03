//? Pattern 9: Right - Angled Triangle of Alternating 1s and 0s(Global Toggle)
//? Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

//?Output
/*
1
0 1
0 1 0
1 0 1 0
*/

let n = 4;
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        toggle = toggle === 1 ? 0 : 1;

    }
    console.log(row)
}

//?Notes
//- the toggle was chnage but not every row means every "new loop it became 1 is not here"