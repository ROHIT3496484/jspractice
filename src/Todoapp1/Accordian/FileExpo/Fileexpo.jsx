import React, { useState } from 'react'
import Fileexplorer from '../../File Explorer/Fileexplorer'

const Fileexpo = ({data}) => {
    const [show, setShow] = useState(false);
    
    const handleshow=()=>{
        setShow(!show);
    }
  return (
    <div className="container">
       <h3 onClick={handleshow}> {data.type === 'folder'? '📁' : '🗄️' }
      {data.name}</h3>
      {show && data?.children?.map((item, index)=>(
        <Fileexpo data ={item}/>
      ))}
    </div>
  )
}

export default Fileexpo
