
//?QUESTION-4
/*
1
22
333
4444
55555
*/

//- her i dont chnage in row

let n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + [i + 1];
    }
    console.log(row);
}

