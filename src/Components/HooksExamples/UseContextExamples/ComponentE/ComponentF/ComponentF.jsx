import React, { useContext } from 'react';
import { RoadContext } from '../../../../../App';

function ComponenetF() {

  const road = useContext(RoadContext);

  return (
    <div>
        <h6> Component F UseContext------ {road} </h6>
    </div>
  )
}

export default ComponenetF