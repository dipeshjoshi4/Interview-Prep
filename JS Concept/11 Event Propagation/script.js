
console.log("Event Propagation")



/*
Question 3: Event Capturing
Explanation: Event capturing is the opposite of event bubbling, where the event is captured from the outermost element towards the target element. By setting {capture: true}, event listeners are triggered during the capturing phase instead of the bubbling phase.

Question 4: Stop Propagation
Explanation: event.stopPropagation() prevents the further propagation of an event through the DOM tree. In the provided code, clicking on the form element will not trigger the click event on the div element due to event.stopPropagation() being called.

Question 5: Event Delegation
Explanation: Event delegation is a technique where a parent element listens for events on behalf of its children. In this code, the parent element with the class "products" listens for click events and checks if the clicked target is a span element, redirecting to a specific URL based on the span's class.

Question 6: What is the Output?
Explanation: The output depends on which element is clicked. If the div or button is clicked, it will alert "div" or "button" respectively. However, if the form is clicked, it will first trigger the capturing phase (alerting "form") before the bubbling phase (alerting "form" again).

Question 7: Create a Modal which closes by clicking on negative space
Explanation: This code sets up a modal that becomes visible when a button with the class "modalButton" is clicked. Clicking on the modal container (the area outside the modal content) will hide the modal by toggling its display property between "flex" and "none".

*/

//? Q-1-What is Event propagation?

//? Html code
/*
<div>
    DIV
    <form action="">FORM
        <button>Button</button>
    </form>
</div>
*/

/*
- what happen i put Event Listnear all 3 means div or form or button
- now if i click on button and button is in forms and meand forms event also Active and div too because div is parents
- so this scenario comes with lot of question like
1. Which sequence this event will be flow or executed
2. either it executed in sequence of div -> form-> button | either it executed in sequence of button ->form-> div
3. or any random way or if this are executed in certain way can we chnage the sequence
- so when and which direction event will executed its called Event Propagation
*/

//?Q-2-What is Event Bubbling

//as per name suggest you might guess bubble goes from down to up and thats sequence by default of this situation
//Event bubbling refers to the propagation of an event from the innermost target element to the outermost ancestor.
//In the provided code, clicking on the button will also trigger the click event on the form and div elements due to event bubbling.

//?CODE
// const div = document.querySelector("div")
// const form = document.querySelector("form")
// const button = document.querySelector("button")

// button.addEventListener("click", function () {
//     alert("button")
// });
// form.addEventListener("click", function () {
//     alert("form")
// });
// div.addEventListener("click", function () {
//     alert("div")
// });

//?question- there are some event who dont bubble like focus and blur,Why and name out some events

/*
- Focus and blur events are inherently tied to input fields or interactive elements that gain or lose focus. They operate at the target element level, specifically dealing with user interaction on that element.

- These events are designed not to bubble because they are highly specific to the target element.For example, when an input gains focus, it's often a specific action related only to that input field, and there is no need for the event to propagate upward.

- When the DOM event system was created, certain event behaviors were intentionally designed not to bubble because the actions are so specific to the element that it doesn't make sense to propagate them further. The idea is to keep focus-related events localized.

- For example:

- If an <input> field is focused, it's usually an action specific to that input, and propagating the event wouldn't make sense in most UI interactions.

- focus and blur do not bubble because they are designed to be specific to the element that is being interacted with, but you can use focusin and focusout for bubbling behavior.

- some events -> focus,blur,load,mouseneter,mouseleave,unload,submit,resize

*/

//?Q-3-event.target vs this.target vs event.currentTarget

//event.target refers to the element that triggered the event, this refers to the element to which the event listener is attached in example like -> the current context
//event.currentTarget refers to the element that is currently handling the event during its capture or bubbling phase.

//event.currentTarget.tagName => its bubble up and one by one show the bubble sequence tag
//event.target.tagName => its bubble up and show only on ename which target
//this.tagName => its bubble up and one by one show the bubble sequence tag(exactly work like currentTarget)

//?Code

// const div = document.querySelector("div")
// const form = document.querySelector("form")
// const button = document.querySelector("button")

// button.addEventListener("click", func);
// form.addEventListener("click", func);
// div.addEventListener("click", func);

// function func(event) {
//     alert("CurrentTarget = " + event.currentTarget.tagName + " Target = " + event.target.tagName + " This = " + this.tagName)
// }

//t.s.06:04
//?Q-4-what is Event Capturing / Trickling ?
/*
- a process which is event capturing means event execute from to the top to bottom . so if iclicked on button then first execute div---> form --> bottton
- for that you have to give capture:true to all eventListnear
***CODE***
button.addEventListener("click", function () {
        alert("button")
    },
    {
            capture: true,
    }

*/

//?CODE
/*
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

button.addEventListener("click", function () {
    alert("button")
},
    {
        capture: true,
    }
);
form.addEventListener("click", function () {
    alert("form")
},
    {
        capture: true,
    }
);
div.addEventListener("click", function () {
    alert("div")
}, {
    capture: true,
});

*/
//?07:22
//?Question-5-How to stop bubbling or capturing?

//- you only have to click button then button addEventlisnear only run to way to do that is stop propagation
//- for that you have take event as argument in addEventlistnear function and add e.stoppropagation()
//- now if you stop at from then write only on before form
//same thing you do when you are capturing phase

//?CODE
/*
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

button.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("button")
},);

form.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("form")
},);

div.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("div")
});
*/
//?CODE-2
//?Capturing phase
/*
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

button.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("button")
},
    {
        capture: true,
    }
);
form.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("form")
},
    {
        capture: true,
    }
);
div.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("div")
}, {
    capture: true,
});

*/

//? to stop any element you to write e.stoppropagation() only before that event action
//? stop at form menas div => form          =====> u have to write before alert('form')
//? stop at form menas div => form =>button =====> u have to write before alert('button')
//? stop at form menas div                  =====> u have to write before alert('div')

//?8:45
//?Que-6-what is Event Delegation?
//- in delegation folder

//?13:38
//?Que-7-Whats the ouput? we have the execute this in following manner .so when i click on buttton first form ,button then div event

//?CODE

/*
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

form.addEventListener("click", function () {
    alert("form")
}, { capture: true } );

div.addEventListener("click", function () {
    alert("div")
},);

button.addEventListener("click", function () {
    alert("button")
},);

*/

//so here for executed form then button and div at last
//we convert form event in capture phase so top to bottom approach
//so when you click button first executed form because its parent of button.then button
//buttton is executing bubble so from bottom to top and last executed div

//variation:
// div -> form -> button = capture
//button -> form -> div = bubble
//div-> button -> form = div ko capture
//form -> div -> btn
//form -> btn -> div = form ko capture

//?QUE-8-create modal which closed by clicking on negative space?
//answer in modal