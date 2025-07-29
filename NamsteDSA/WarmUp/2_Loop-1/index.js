//loops - reapeating one thing continuous
//- for loop(be good at it)
//- while loop

//? SYNTAX
/*
    for (intialization, condition, increment / decrement){
        Whtever You Wanna Print
    }
*/

//?print 5 time hello world
/*
for (let i = 0; i < 5; i++){
    console.log("Hello World")
}
*/

//?print 4 time hello world
/*
for (let i = 0; i <= 4; i++) {
    console.log("Hello World " + i)
}
*/

//?Print hello world but i start from 3
/*
for (let i = 3; i < 5; i++) {
    console.log("hello world " + i)
};
*/

//?Print Hello World but counting increment with +2 and count start from 2 till 9
/*
for (let i = 2; i < 9; i = i + 2) {
    console.log("Hello World")
}
*/

//? Print Hello World from 5 and decrement by -1 till bigger then 0
/*
for (let i = 5; i > 0; i--) {
    console.log("Hello World")
}
*/

//? start i from 5 and increment +1 untill i become less then 4
/*
for (let i = 5; i < 4; i++) {
    console.log("Hello World")
}
*/
//?OUTPUT- EMPTY CONSOLE

//?INFINITE LOOP
/*
for (let i = 1; i > 0; i++) {
    console.log("Hello")
}
*/
//? OUTPUT- Infinte Loop


//?What if Put Function Inside The Loop------------------------
/*
function greet() {
console.log("Hello")
}
for (let i = 0; i < 5; i++) {
   greet();
}
*/

//?Put Array On Loop
/*
let arr = [10, 6, 2, 0, 8, 3, 80];
let length = arr.length; //7
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}
*/


//? Running a loop which traversal all the array element and print
/*
 let arr = [10, 6, 2, 0, 8, 3, 80];
 for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 }
*/

//?Print the all the even number
/*
let arr = [10, 7, 9, 0, 8, 3, 80];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}
*/

//?Print the All Odd Number
/*
let arrOdd = [10, 7, 8, 5, 4, 6, 9, 1];
for (let i = 0; i < arrOdd.length; i++) {
    if (arrOdd[i] % 2 == 1) {
        console.log(arrOdd[i])
    }
}
    */

//? WHILE LOOP
/*
let i = 0;
while (i < 5) {
    console.log("Hello");
    i++;
}
*/

//? WHILE LOOP with array travsel
/*
let arr = [5, 7, 8, 9, 10];
let i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++
}
*/