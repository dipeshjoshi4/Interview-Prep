
# React Rendring Process - (Virtual DOM and Diffing Algorithm)

- react have declarative approach not Imperative. that means its use something called virtual dom to allow this process

# React Render Process Divide in 2 times
1. Render Phase
2. Commit Phase

- 2 major things happen when render happen
1. when app loaded that time one render happen which is called intial render
2. when our state updated then render happen and out component render.means re-render 

- if we write "console.log("redner")." then refresh it show in console.
- if update state by clicking button then  render again happen which will show in console.
- but if we use to do with variable then it doesnt chnage count and re-render the state/Component


<!-- function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count+1)
    }
   console.log("Render Happen") // this is on 
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
} -->

- when whole component re-render the child component also re-render
- but if there is multiple state in component then also react render once  because the code of re-render function will work as async means first function will be render then second 

# Example -1 
<!--
const CounterParent = () => {
const [showMessage, setShowMessage] = React.useState(false)
const [showMessage2, setShowMessage2] = React.useState(false)
const toggleMsg = () => {
    setShowMessage(!showMessage)
    setShowMessage2(!showMessage2)
}
console.log("parent rendered");
    return (
        <div>
            <Counter />
            {showMessage && <b>Now You see me</b>}
            <button onClick={toggleMsg}>Show Message</button>
        </div>
    )
}
 -->

- this code work as async thats why all the time code answer is 0+1 =1 
- thats how react handle the re-render 
 # Example-2
<!-- 
const [count, setCount] = React.useState(0);
const increment = () => {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCout(count+1)
} 
-->

# example-3
<!--
const [count, setCount] = React.useState(0);
const increment = () => {
        setCount((prevalue) => prevalue+1)
        setCount((prevalue) => prevalue+1)
        setCount((prevalue) => prevalue+1)
        setCout((prevalue) => prevalue+1)
}  
-->

- if i do like this still render happen once then  counter answer get different but multiple state have still render only done once

### intial rendering process
# jsx -> React Element -> Virtual DOM | Actula Dom
-----------Render Phase---------------|--Commit Phase--

# Code
const counter =  React.createElement(
    "div",
    null,
    React.createElement("p", null, `Count:${count}`),
    React.createElement("button", { onClick: increment }, `Increment`)
    );
 console.log("Component render", counter)
 return counter;

# code in console
- so there is one object of div .thats for the counter and then again props they object and for next element then props .....
- this whole things goes at end of your react code and thats called "Virtual DOM"

# Virtual DOM
- its kind of dummy or fake dom created which is intial in actual DOM 
- its just use by react to enhance App performance
- when we go to console -> elements-> counter .when we click incremnt button the superfast only thing is chnage is State on counter.
- so thats superfast technique provide virtual dom 


### State Update

# JSX -> React Element -> Virtual DOM -> new Virtual Dom  |-----Actula DOM------

-----------Render Phase(old and new VDom Comparison)----- |------Commit Phase----


- intial rendering genrate virtual DOM 
- but when we click and update state rendering start
- and that click genrate complertly new virtual dom
- so react have now to find which node or component have canged means that only component we have to chnage 
- and provide only that chnage in actual DOM
- so comapring OLD VIRTUAL DOM and NEW VIRTUAL DOM => is done by Diffing Algo
- and this compare and then commit to actual DOM ....this process call Reconcilance
- Reconcilance is process which occurs between two phases of rendering
- reconcilance use behind the scene is diffing algo using

- so everytime our component re-render the numeric value of any variable is lost
- so for variable we use just for constant value 

- and yes whiile comparing if there is no differnece in old and new VDOM => there is no updation on actuall dom happen

T.S.->14:30

# what is this diffing algo ? why we need ? Why cant we directly update the actual DOM

- updating the Actual dom is very expensive process. and it can lead to performance shortcoming
- but genrating js object virtualDom is something like this. this is really easy.so react using virtual dom to reduce the access cost that is incured the re-paint the whole enire page
- now imagine the get rid of vDOM and update in actual dom and update for all chnage whole code of actual dom that slow down app and so musc time and work . so its better to use two tree compare and update the actual DOM

# How diffing algo works ? how fast ?

- every 100 node roughly 10 million comparison ->  complexity is o(n*n*n)
- how does react compare old and new vdom comparision ? how react doing so fast this 
- dififng algo is doing assumption while comparing old tree vs new tree if react see and element replace with other element by new tree.
- old tree scrap the whole that part and take chnage part from new tree



