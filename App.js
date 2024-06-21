/*
 <div id="parent">
    <div id="child1">
        <h1>I'm H1 Tag</h1>
         <h2>I'm H2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm H1 Tag</h1>
         <h2>I'm H2 Tag</h2>
    </div>
 </div>
*/

const parent = React.createElement("div", { id: "parent" },
                    [
                        React.createElement("div", { id: "child1" },
                            [
                                React.createElement("h1", { id: "heading" }, "Im CHILD 1 H1 Tagsss"),
                                React.createElement("h2", { id: "heading" }, "Im CHILD 1 H2 Tagsss")
                            ]
                        ),
                        React.createElement("div", { id: "child2" },
                            [
                                React.createElement("h1", { id: "heading" }, "Im CHILD2 H1 Tagsss"),
                                React.createElement("h2", { id: "heading" }, "Im CHILD2 H2 Tagsss")
                            ]
                        )
                    ]
);

//const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Im H1 Tag")));

//const heading= React.createElement("h1",{id:"heading"},"Hello World from React Page!");

//console.log(heading);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);