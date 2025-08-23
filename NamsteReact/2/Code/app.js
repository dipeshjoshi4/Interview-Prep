/*
Example-3
<div>
    <div>
        <h1> This is Heading h1 </h1>
        <h2> This is Heading h2 </h2>
    </div>
    <div>
        <h1> This is Heading h1 </h1>
        <h2> This is Heading h2 </h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "Parent" },
    [

        React.createElement("div", { id: "Child1" }, [
            React.createElement("h1", {}, "I Am CHILD ONE H1 TAG"),
            React.createElement("h1", {}, "I Am CHILD ONE H2 TAG")
        ]),
        React.createElement("div", { id: "Child2" }, [
            React.createElement("h1", {}, "I Am CHILD TWO H1 TAG"),
            React.createElement("h1", {}, "I Am CHILD TWO H2 TAG")
        ]),
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
