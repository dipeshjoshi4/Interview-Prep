
function Counter() {

    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count+1)
    }
    // return React.createElement(
    const counter =  React.createElement(
        "div",
        null,
        React.createElement("p", null, `Count:${count}`),
        React.createElement("button", { onClick: increment }, `Increment`)
    );

    console.log("Component render", counter)
    return counter;

    //?for smooth development we use jsx || for jsx convert for react use babel
    // return (
    //     <div>
    //         <h1>Count:{count}</h1>
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // )
}

const CounterParent = () => {
    const [showMessage, setShowMessage] = React.useState(false)
    console.log("parent rendered");
    return (
        <div>
            <Counter />
            {showMessage && <b>Now You see me</b>}
            <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CounterParent));
// root.render(React.createElement(Counter));