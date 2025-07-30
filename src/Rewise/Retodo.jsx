import React, { useState } from 'react'

const Retodo = () => {

    const [val, setVal] = useState("");
    const [data, setData] = useState([]);

    const handleClick=()=>{
        setData((prev)=>[...prev, val]);
    }

    const handledel = (i)=>{
        setData((prev )=> prev.filter((_, idx)=> idx !==i));
    }
  return (
    <div>
        <input onChange= {(e)=> setVal(e.target.value)}type="text" />
        <button onClick={handleClick}>Add</button>
        {
            data.map((item, index)=>{
                return <li key={index}>{item} <button onClick={()=>handledel(index)}>delete</button></li>
                            
            })
        }
      
    </div>
  )
}

export default Retodo
