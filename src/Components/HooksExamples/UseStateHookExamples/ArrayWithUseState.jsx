import React, { useState } from 'react'

function ArrayWithUseState() {

    const [arr, setArray] = useState([8, 2, 1, 7, 5, 9, 3, 4, 6]);

    const handleClick = () => {
        const sortedArray = [...arr].sort(); //// will sort array and mutate main array but not change the reference
        setArray(sortedArray);
        console.log(sortedArray);
        
    }

  return (
    <div>
        {arr.map((num, idx) => (
            <h4 key={idx}>{num}</h4>
        ))}
        <button onClick={handleClick}>Arrange Array</button>
    </div>
  )
}

export default ArrayWithUseState