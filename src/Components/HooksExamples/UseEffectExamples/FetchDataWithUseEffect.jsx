import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FetchDataWithUseEffect() {

   const [posts, setPosts] = useState([]);

   useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((Road) => {
            console.log(Road.data);
            setPosts(Road.data)
        } )
   }, [])

  return (
    <div>
        {posts.map((post) => (
            <h3 key={post.id}>{post.title}</h3>
        ))}
    </div>
  )
}

export default FetchDataWithUseEffect;