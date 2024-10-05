/*
- webApi given a function setTimeout() with that we can acheive debounce or throttling
- use : scroll,search,window size restore that time unwanted function call . we dont want to call again and again that 
we use code that way . so that function dont call unnecessary or unwanted or call at specific interval  
*/

//?Why need ? | let's understand with below example
let counter = 0;
function getData() {
    console.log("fetching data " + counter++);
}

/*
- why do that on every key press we dont want f.call for this example not effect but for the large scale application.
- where so many data comes from api and transaction happen its not healthy
- so we have to write smart function which delay on specific time 
*/


function myDebounce(callback,delay){
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback()
        }, delay)
    }
}

const bettterFunction = myDebounce(getData,1000)