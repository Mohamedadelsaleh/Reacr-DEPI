import React, { useState } from 'react'

function StringWithHooks() {

   const [name, setName] = useState("Guest");

   const handleName = () => {
        setName("Sara")
   }

  return (
    <div>
        <h3> Welcome {name}</h3>
        <button onClick={handleName}>Change Message</button>
    </div>
  )
}

export default StringWithHooks