//?Question-1
// Create a button UI AND ADD throttle  AS FOLLOWS
//---------> Show  "BUTTON PRESSED <X> TIMES " every time button is pressed
//--------->Increase "Triggered <Y> Times " Count every 800ms debounce

// one button click count increase but you have to add your trigger count only increase by passing after 800 ms time


const btn = document.querySelector(".increment_btn")
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

var pressCount = 0;
var triggerCount = 0;

const start = new Date().getTime();



const throttleCount = _.throttle(() => {
    const now = new Date().getTime()
    console.log(now - start)
    count.innerHTML = ++triggerCount;
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressCount;
    throttleCount();
})



