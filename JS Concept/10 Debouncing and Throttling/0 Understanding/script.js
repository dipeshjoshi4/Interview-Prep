console.log("10 Debouncing and Throttling");

/*
Question: How does the JavaScript code implement debounce functionality for button clicks?
- The JavaScript code uses lodash's _.debounce function to create a debounced version of a callback function.
-  It tracks the number of times a button is pressed and updates the count after a specified debounce time (800ms in this case).

Question: How does the JavaScript code implement throttle functionality for button clicks?
- The JavaScript code uses lodash's _.throttle function to create a throttled version of a callback function.
- It tracks the number of times a button is pressed and updates the count at intervals of 1000ms, ensuring that the callback function is not invoked more than once in that interval.

Question: What is the purpose of the JavaScript code for a custom debounce function (polyfill)?
- The JavaScript code defines a custom debounce function myDebounce that mimics the behavior of lodash's _.debounce.
- It creates a debounced version of a callback function and ensures that the callback is executed only after a specified debounce time (800ms in this case) since the last invocation.

Question: What is the purpose of the JavaScript code for a custom throttle function (polyfill)?
- The JavaScript code defines a custom throttle function myThrottle that mimics the behavior of lodash's _.throttle.
- It creates a throttled version of a callback function and ensures that the callback is invoked at most once per specified interval (1000ms in this case), preventing rapid successive invocations.
*/

//!What IS Debounce functionality ? How it works ? Why we need it?
//? debounce work on flipkart searchbar
//- when i type something and stop for some millisecond then serch api show me some suggestive text by fetching api call
//- this how debounce work it help us optimize how we call certain events
//- if we put api call on every latter or every keystorke press .
//- they throw lot of unnecessary api calls and that api calls puts pressure on our server.to avoid this issue we use debounce
//- it limit the execution and delay for sometime then call function Again

//Debounce Visualluzation
// - we call every latters in time of 100ms but function call when we paused write letter after some specific time that we set then only 1 api call and give data

// example ----->  |  |  |  |  |  |     * here function call   |

//!What IS Throttling functionality ? How it works ? Why we need it?

// - Example -> twitter scrolling Throttling works

//- how Unlimited scroll animation work if i check of all scroll thousand of api calls run and fetch data .
//- its load and heavy the app.you cant do that.for that Throttling comes in the picture

//- so we put throttling on action of scroll animation of twitter .
//- so when the scroll comes to bottom reaching 5000px.api call and new post are coming.so scrooll animation.



