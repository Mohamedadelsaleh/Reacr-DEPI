import React from "react";
import axios from "axios";

class GETHTTPEx extends React.Component {

    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    //https://jsonplaceholder.typicode.com/posts from BackEnd

    componentDidMount(){
    
        axios.get("https://jsonplaceholder.typicode.com/postsaasdsdas")
        .then((response) => {
            this.setState({posts: response.data});
            
        }).catch((error) => {
            console.log(error);
            
        })
        
    }

    render() {
        return (
            <div>
                <h2> Post of API</h2>
                {
                    this.state.posts.map((post) =>(
                        <div key={post.id}>
                            <p>Title: {post.title}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default GETHTTPEx;