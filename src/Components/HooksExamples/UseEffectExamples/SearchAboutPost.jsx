import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SearchAboutPost() {

    const [id, setId] = useState(1);
    const [post, setPost]= useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data) )
    }, [id])

  return (
    <div>
        <label>Enter Post ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <div>
            <h2>{post.title}</h2>
        </div>
    </div>
  )
}

export default SearchAboutPost