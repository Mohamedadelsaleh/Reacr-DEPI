import React from "react";

// React.createElement("Html tag", {Properties //class ids styles}, "children")

function WithoutJSX () {
    return React.createElement("div", null, 
        React.createElement("h1", null, "Hello from React Course Eman Component"))
}

export default WithoutJSX;