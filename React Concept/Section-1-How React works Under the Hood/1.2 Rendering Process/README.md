
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

-----------Render Phase---------------|--Commit pHase--