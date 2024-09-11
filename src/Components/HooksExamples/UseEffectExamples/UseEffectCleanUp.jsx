import React, { useEffect, useState } from 'react'
import UseEffectOneTime from './UseEffectOneTime';

function UseEffectCleanUp() {

   const [show, setShow] = useState(true);

  return (
    <div>
        <button onClick={() => setShow(prv => !prv)}>Show Component</button>
        {show ? <UseEffectOneTime /> : null}
    </div>
  )
}

export default UseEffectCleanUp;