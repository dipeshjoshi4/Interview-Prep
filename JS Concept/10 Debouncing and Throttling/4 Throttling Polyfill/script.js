
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start = new Date().getTime();

const myThrottle = function (cb, d) {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;
        return cb(...args);
    };
};

var throttled = _.throttle(() => {
    triggerCount += 1
    count.innerHTML = triggerCount
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML = pressedCount++
    const now = new Date().getTime()
    const seconds = (now - start) / 1000
    console.log(seconds.toFixed());
    throttled()
});


/*
- The JavaScript code defines a custom throttle function myThrottle that mimics the behavior of lodash's _.throttle.
- It creates a throttled version of a callback function and ensures that the callback is invoked at most once per specified interval (1000ms in this case), preventing rapid successive invocations.
*/

///? logic

//- since throttle perform different from debounce so let break it down one by one

// - first my throttle genric function who takes argument as callback function and delay time
//? const myThrottle = (cb,d) => {}

//- throttle mutliple event executing one after otherone. and we have to only execute a event after certain delay .when all the event excuting one by one
//- when a particular event executing we have to record that time
//? const myThrottle = (cb,d) => {
//?   let last = 0
//? }

//- by default we keep it 0. when other event happens we messure ====>current time - prvious time  = x
//- x is lesser then delay time ===> we dont do anything. we simply return it. we dont execute the event
//- x is more then delay time =====> we do executed the particular event .so we return function

//?   const myThrottle = (cb,d) => {
//?   let last = 0
//?   return (...args) => {
//?         let now = new Date().getTime();
//?         if (now - last < d) return;
//?         last = now
//?         return cb(...args);
//?   }
//? }


