import React from "react";


const PropsExample = (props) => {
    console.log("Props", props);
    
    return (
        <div>
            <h1> Hello {props.name}! Your Age: {props.age ? props.age : 20} We are in {props.courses ? props.courses.course3 : "React"} Course</h1>
            {props.children}
        </div>
    );
}

export default PropsExample;