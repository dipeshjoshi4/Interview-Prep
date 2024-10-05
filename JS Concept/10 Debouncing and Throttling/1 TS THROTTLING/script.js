
// - webApi given a function setTimeout() with that we can acheive debounce or throttling

// there is one button in form end if you click once it will eneter the data in db. but there is bug if you click again then double time data store in db. so we have to disable and see if once f.call then button again enable untill its disable

const myThrottle = (callback,d) => {
    return function (...args) {
        document.getElementById("myid").disabled = true;
        setTimeout(() => {
            callback()
        },d)
    }
}

const newFun = myThrottle(() => {
    console.log("User CLicked")
    document.getElementById("myid").disabled = false;
},3000)

