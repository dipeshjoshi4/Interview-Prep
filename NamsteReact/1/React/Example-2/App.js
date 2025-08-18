
/*
Example-1
<div>
    <div>
        <h1> This is Heading h1 </h1>
    </div>
</div>
*/

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "This is h1 heading"),
//     ))
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

/*
Example-2
<div>
    <div>
        <h1> This is Heading h1 </h1>
        <h2> This is Heading h2 </h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is h1 heading"),
        React.createElement("h2", {}, "This is h2 heading"),
    ]))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
console.log(parent)

/*
Example-3
<div>
    <div>
        <h1> This is Heading h1 </h1>
        <h2> This is Heading h2 </h2>
    </div>
</div>
*/