import React, { useReducer } from 'react';

const initalState = 0;

const reducer = (currentState, action) => {
    
        switch(action) {
            case 'increment':
                return currentState + 1;
            case 'decrement':
                return currentState - 1;
            case'reset':
                return initalState;
            default:
                return currentState;
        }
}

function SimpleExmple() {

   const [newState, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
        
        <h2>Counter: {newState}</h2>

        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>

    </div>
  )
}

export default SimpleExmple;