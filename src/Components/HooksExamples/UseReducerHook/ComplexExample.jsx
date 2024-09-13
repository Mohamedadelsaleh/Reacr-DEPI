import React, { useReducer } from 'react';


const initialState = {
    firstCounter: 0,
    secondConter: 17,
    email: ""
};

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment':
            return {...currentState, firstCounter: currentState.firstCounter + action.value};
        case 'decrement':
            return {...currentState, firstCounter: currentState.firstCounter - action.value};
        case 'increment2':
            return {...currentState, secondConter: currentState.secondConter + action.value};
        case 'decrement2':
            return {...currentState, secondConter: currentState.secondConter - action.value};
        case 'changeEmail':
             return {...currentState, email: action.value};
        case'reset':
            return initialState;
        default:
            return currentState;
    }
}

function ComplexExample() {

       const [newState, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>First Counter: {newState.firstCounter}</h2>
        
        <button onClick={() => dispatch({type: 'increment', value: 1})} >Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})} >Increment By 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement  By 5</button>
        <div>
            <h2>Second Counter: {newState.secondConter}</h2>
            <button onClick={() => dispatch({type: 'increment2', value: 16})}>Increment by 16</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 3})}>Decrement by 3</button>
        </div>
        <div>
            <h2>Email: {newState.email}</h2>
            <input type='email' value={newState.email} onChange={(e) => dispatch({type:'changeEmail', value: e.target.value})} />
        </div>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ComplexExample;