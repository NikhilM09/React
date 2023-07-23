{/* <div id=root>
    <div class="parent1">
        <h1 class="heading1">This is heading 1</h1>
        <h2 class="heading2">This is heading 2</h2>
    </div>
    <div class="parent2">
     <h1 class="heading1">This is heading 1</h1>
    <h2 class="heading2">This is heading 2</h2>
    </div>
    
</div> */}
const parent1 = React.createElement("div",{className: "parent1"}, 
                    [React.createElement("h1",
                    {className : "heading1",
                        style : {backgroundColor:"red"},
                        }, "This is heading 1"),
                    React.createElement("h2",{className : "heading2"}, "This is heading 2")
                ]);

console.log("parent1", parent1);

const parent2 = React.createElement("div",{className: "parent2"}, 
                    [React.createElement("h1",{className : "heading1"}, "This is heading 1"),
                    React.createElement("h2",{className : "heading2"}, "This is heading 2")
                ]);

// const heading1 = React.createElement("h1",{className : "heading1"}, "This is heading 1")

// const heading2 = React.createElement("h2",{className : "heading2"}, "This is heading 2")

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render([parent1, parent2]);


//bundler: it bundles everything together

//parcel
//create-react-app 
