import React from "react";

class FormHandlingEx extends React.Component {

    constructor(){
        super();
        this.state = {
            userName:"",
            password:"",
            comments:"",
            gender:""
        }
    }

    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handleCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }

    handleGenderChange = (event) => {
        this.setState({gender: event.target.value}, () => {
            console.log(this.state);
            
        })
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your UserName is ${this.state.userName}, 
            Your Comments are ${this.state.comments}, 
            and your Gender is ${this.state.gender}`)
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Your Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Choose Gender</label>
                    <select value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value="">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit">Send to DataBase</button>
            </form>

        )
    }
}

export default FormHandlingEx;