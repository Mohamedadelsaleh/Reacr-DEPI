import React from 'react'

class SideEffectWithClass extends React.Component {

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        document.title = `React App clicked ${this.state.counter}`
    }

    componentDidUpdate() {
        document.title = `React App clicked ${this.state.counter}`
    }

    render() {
        return (
            <div>
                <h3>Counter ---------------------- {this.state.counter}</h3>

                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Change counter</button>
            </div>
        )
    }
}

export default SideEffectWithClass;