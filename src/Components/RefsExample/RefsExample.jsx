import React, { Component } from "react";


class RefsExample extends Component {

    constructor() {
        super();
            this.state={
                mail: ""
            }

            this.myRef = React.createRef();
            this.myPass = React.createRef();
    }

    componentDidMount(){
        console.log(this.myRef.current);
        this.myRef.current.focus();
        // this.myPass.current.focus();
        console.log("value", this.myPass.current.value);   
    }

    changePass = (e) => {
        this.setState({
            mail: e.target.value
        },
            () => {
                console.log(this.state.mail);
                
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <label> E-mail </label>
                    <input type="text" ref={this.myRef} />
                </div>
                <div>
                    <label> Password </label>
                    <input type="text"  value={this.state.mail} ref={this.myPass} onChange={this.changePass} />
                </div>
            </div>
        )
    }
}

export default RefsExample;