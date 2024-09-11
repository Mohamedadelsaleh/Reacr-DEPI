import React, { useEffect, useState } from 'react'

function UseEffectOneTime() {

     const [x, setX]= useState(0);
     const [y, setY]= useState(0);

     useEffect(() => {
        console.log("calling of useEffect");
        window.addEventListener('mousemove', deductMousePosition)

        return () => {
            console.log("cleaning ---- unmounting");
            window.removeEventListener('mousemove', deductMousePosition)
        }
     }, []);


    //  useEffect(() => {  stage 1 of lifeCycle method (mounting)
        // your logic
    //  }, []);


    // useEffect(() => { stage 3 of lifeCycle method (unmounting)
            // your logic

    //     return () => {
                    // your logic
    //     }
    //  }, []);

     const deductMousePosition = (e) => {
        console.log("Position function");
        
            setX(e.clientX)
            setY(e.clientY)
     }

  return (
    <div>
            X ------- {x} and Y ------- {y}
    </div>
  )
}

export default UseEffectOneTime;