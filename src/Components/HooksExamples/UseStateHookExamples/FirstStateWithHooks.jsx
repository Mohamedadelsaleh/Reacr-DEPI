import React, {useState} from 'react'

function FirstStateWithHooks() {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h2>Counter Hooks ----- {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Clicked Hooks</button>
        </div>
    )
}

export default FirstStateWithHooks