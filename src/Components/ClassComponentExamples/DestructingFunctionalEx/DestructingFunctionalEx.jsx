import React from 'react';

function DestructingFunctionalEx (props) {   //({fname, lname, age})
    const {fname, lname, age} = props; // in body
    return(
        <div>
            <h3> Hello Road! this is {fname} {lname} my age is {age} body</h3>
        </div>
    )
}

export default DestructingFunctionalEx;