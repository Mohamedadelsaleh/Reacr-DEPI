import React, { Component } from "react";

class EventHandlingClassEx extends Component {


    constructor() {
        super();
        this.state= {
            welcome: "Guest"
        }
        // this.handleClick = this.handleClick.bind(this) // most common used
        
    }

    // handleClick() {
    //     console.log(this);
        
    //     this.setState({
    //         welcome: "Hend"
    //     })
        

    handleClick = () => {
        console.log(this);
        
        this.setState({
            welcome: "Hend"
        })
        
    }

    render() {
        return (
            <div>
                <h3>Hello {this.state.welcome} !</h3>
                
                {/*
                    // 1- Use bind keyword to bind handler in render method
                    <button onClick={this.handleClick.bind(this)}>Class Click me</button>
                */}
                {/* 
                    // 2- Use arrow function in render method 
                    <button onClick={()=> this.handleClick()}>Class Click me</button> 
                */}
                {/* 
                    // 3- bind event handler in constructor
                    <button onClick={this.handleClick}>Class Click me</button> 
                */}
                {/* 
                    // 4- Arrow function as a class property
                */}
                <button onClick={this.handleClick}>Class Click me</button> 
                    
            </div>
        )
    }
}


export default EventHandlingClassEx;