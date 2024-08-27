import React, { Component } from "react";

class PropsClass extends Component {
    render(){
        console.log(this.props);

        // this.props.fname ="Mohamed"
        
        return(
            <div>
                <h2> {this.props.fname} {this.props.lname} Class Component {this.props.school ? this.props.school : "Without School" }</h2>
            </div>
        )
    }
}

export default PropsClass;