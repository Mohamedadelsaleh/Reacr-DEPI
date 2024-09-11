import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SearchWithButton() {
 
    const [id, setId] = useState(1);
    const [post, setPost]= useState({});
    const [buttonId, setButtonId] =useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data) )
        .catch((error) => console.log(error));
    }, [buttonId]);


  return (
    <div>
        <label>Enter Post ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => setButtonId(id)}>Search</button>
        <div>
            <h2> Button Search-----{post.title}</h2>
        </div>
    </div>
  )
}

export default SearchWithButton