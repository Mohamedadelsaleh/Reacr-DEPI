import React, { useEffect, useState } from 'react'

function SideEffectWithUseEffectHook() {
    const [counter, setCounter]= useState(0);

    useEffect(() => {
        console.log("calling Setup inside useEffect");
        document.title = `React App clicked ${counter}`
    });

  return (
    <div>
        <div>
            <h2> Updating Counter ------- {counter}</h2>
            <button onClick={() => setCounter(prev => prev + 1)}>Change Counter ---- {counter}</button>
        </div>
    </div>
  )
}

export default SideEffectWithUseEffectHook;