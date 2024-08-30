import React from "react";

function EventHandlingEx() {


    function handleClick () {
        alert("Function Run immediately")
        console.log("Button Has been Clicked");
        
        
    }

    return(
        <div>
            {/* <button onclick='handleClick()'>Click Me</button>  old behavior in HTML and Js*/} 
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandlingEx;