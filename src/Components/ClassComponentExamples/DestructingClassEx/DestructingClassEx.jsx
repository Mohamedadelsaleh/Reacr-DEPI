import React, { Component } from "react";

class DestructingClassEx extends Component {

    constructor(props) {
        super(props);
        this.state={
            message : "User",
            value: props.lname , // "Mohamed"
            number: 2155488155
        };
    }

    changeName () {
        if(this.state.value === "Sara") {
            console.log("Entered");
            
            this.setState({value: this.props.lname})
        }else {
            this.setState({value: "Sara"})
        }
    }


    render() {
        const {fname, lname, age} = this.props;
        const {message, value, number} = this.state;

        return (
            <div>
                <h2>Hello Stat {message} value: {value} number:{number}</h2>
                <h4> Hello There! {fname} {lname} my age {age}</h4>
                <button onClick={() => this.changeName()}> Change Name</button>
            </div>
        )
    }
}

export default DestructingClassEx;