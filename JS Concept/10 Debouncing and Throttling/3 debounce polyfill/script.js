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
},2000)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressCount;
    debounceCount();
})



/*
- The JavaScript code defines a custom debounce function myDebounce that mimics the behavior of lodash's _.debounce.
- It creates a debounced version of a callback function and ensures that the callback is executed only after a specified debounce time (800ms in this case) since the last invocation.
*/

//poylifill step or logic wise make function

