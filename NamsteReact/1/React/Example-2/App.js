// Example - 2

{/*
< div id="parent">
    <div id="child">
        <h1> This is Heading h1 </h1>
        <h2> This is Heading h2 </h2>
    <div/>
</div> 
*/}

//?CODE

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is h1 heading"),
        React.createElement("h2", {}, "This is h2 heading"),
    ]))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
console.log(parent)
