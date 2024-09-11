import React, { useEffect, useRef } from 'react'

function UseRefHookEx() {

   const ourRef = useRef(null);

   useEffect(() => {
        ourRef.current.focus();
   }, [])

  return (
    <div>
        <label>User Name: </label>
        <input type="text" ref={ourRef}/>
    </div>
  )
}

export default UseRefHookEx