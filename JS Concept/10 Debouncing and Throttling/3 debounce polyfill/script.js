console.log("Debounce Polyfill")

const btn = document.querySelector(".increment_btn")
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

var pressCount = 0;
var triggerCount = 0;

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressCount;
    
})
