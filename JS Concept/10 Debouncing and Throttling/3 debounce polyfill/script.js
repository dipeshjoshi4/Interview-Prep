console.log("Debounce Polyfill")

const btn = document.querySelector(".increment_btn")
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")
var pressCount = 0;
var triggerCount = 0;

const myDebounce = (cb, d) => {
    let timer;
    return function () {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb()
        },d)
    }
}

const debounceCount = myDebounce(() => {
    triggerCount = triggerCount + 1
    count.innerHTML = triggerCount
}, 2000)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressCount;
    debounceCount();
})

//?Info

//- The JavaScript code defines a custom debounce function myDebounce that mimics the behavior of lodash's _.debounce.
//- It creates a debounced version of a callback function and ensures that the callback is executed only after a specified debounce time (2000s in this case) since the last invocation.

//!poylifill step or logic wise How to make function

//_.lodash debounce have callback function and waiting time so we make generic function .
//? const myDebounce = (cb, d) => {

//- which have argument like callback function and waiting time .and here call back means we have to return function .
//- this function take extra argument which we provide
//- make one time varible who will note the time after every keystroke we press so that we make function call or not .we will know by that
//? const myDebounce = (cb, d) => {
//? let timer;
//? return function(...args){}

//- we make clear time before action done so that every time click btn and trigger btn dont work continuous
//- make setTimeout and and call your callback and last give waiting period
//?  const myDebounce = (cb, d) => {
//?     let timer;
//?     return function(...args){
//      if(timer) cleartimeout(timer) //? - time between 2 click is less then 2000 so we have to clear that time
//?     timer = setTimeout(() => {
//?         cb(...args)
//?     }, d);
//? }

//- now make customize with data call this customize function in addEventListnear function

