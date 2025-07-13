import React, { useState } from 'react'
import Bar from './Bar'

const Progresshome = () => {
  const[show, setShow] = useState(false);
  return (
    <div>
      {show ? <Bar/> : ""}
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Progresshome
