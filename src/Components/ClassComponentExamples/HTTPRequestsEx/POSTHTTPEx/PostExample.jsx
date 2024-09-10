import axios from "axios";
import React from "react";


class PostExample extends React.Component {

    constructor(){
        super();
        this.state = {
            userId:"",
            title:"",
            body:""
        }
    }

    handleChange = (event) => {    
        console.log(event.target.name);
            
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User ID</label>
                    <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body}onChange={this.handleChange} />
                </div>
                <button type="submit">Post Data to API</button>
            </form>
        )
    }
}

export default PostExample;