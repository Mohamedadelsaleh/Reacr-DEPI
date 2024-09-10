import React, { useState } from 'react'

function HandlePerviousState() {

    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const handleIncrementByFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prev => prev + 1); // 1 -- 2 -- 3 --------> 5
        }
    }

  return (
    <div>

        <h3>Counter after change: {count}</h3>

        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={handleIncrementByFive}>Increment by 5</button>
    </div>
  )
}

export default HandlePerviousState;