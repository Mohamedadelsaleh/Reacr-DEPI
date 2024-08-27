import React, { Component } from "react";

class StateExample extends Component {

    constructor() {
        super();
        this.state= {
            message: "Hend" //default Value
        };
    }

    changeMessage () {
        this.setState({message: "Road User"}, () => {
            if(this.state.message === "Road User" ){
                alert("After SetState you are logged in")
            }
        }); // async  ---- take time ----> Event Queue 
        // this.state.message = "Road User";
        // console.log(this.state.message);
        
    }

    render() {
        return (
            <div> 
            
                <h3>Hello {this.state.message}! </h3>
                <button onClick={() => this.changeMessage()}>Change Message</button>
            </div>
        )
    }
}

export default StateExample;