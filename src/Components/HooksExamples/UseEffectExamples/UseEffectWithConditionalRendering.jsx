import React, { useEffect, useState } from 'react'

function UseEffectWithConditionalRendering() {

   const [count, setCount] = useState(0);
   const [id, setId] = useState(0);
   const [name, setName] = useState("");

   useEffect(() => {
        console.log("calling UseEffect")
        document.title = `Change Counter ---- ${count}`
   }, [count]);


//    useEffect(() => {      Hooks LifeCycle Methods ---- 2 --- updating Stage
//         //your logic here
//    }, [state, props])

  return (
    <div>
        <div>
            <input type="text" value={name} onChange={(e) =>  setName(e.target.value)} />
        </div>
        <button onClick={() => setCount(prv => prv + 1)}>Counter ------ {count}</button>
        <button onClick={() => setId(prv => prv + 1)}> ID --- {id}</button>
    </div>
  )
}

export default UseEffectWithConditionalRendering