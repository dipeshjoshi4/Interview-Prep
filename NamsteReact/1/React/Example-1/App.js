
/*
Example-1
<div>
    <div>
        <h1> This is Heading h1 </h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "This is h1 heading"),
    ))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)




