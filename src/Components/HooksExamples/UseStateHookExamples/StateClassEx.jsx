import { Component } from "react";


class Counter extends Component {

    constructor() {
        super()
        this.state= {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return (
            <div>
                <h2>Counter ----- {this.state.counter}</h2>
                <button onClick={this.handleClick}>Clicked</button>
            </div>
        )
    }
}

export default Counter;