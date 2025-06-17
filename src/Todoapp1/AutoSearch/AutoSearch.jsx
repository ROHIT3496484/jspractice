import React, { useEffect, useState } from 'react'
import data from './data.json'
const AutoSearch = () => {
    const [val, setVal] = useState("");
    const [found, setFound] = useState([]);
    useEffect(()=>{
        const debounce =setTimeout(()=>{
            let arr =[];
        if(val.length>1){
            arr = data.filter((item)=>item.name.toLowerCase().includes(val)
            );
        }
        setFound(arr);
        }, 1000)
        
        return()=> clearTimeout(debounce);
    },[val])
  return (
    <div>
      <input onChange={(e)=>setVal(e.target.value)}></input>
      <div>
        {
            found.map((item)=>(
                <li key={item.id}>
                    {item.name}
                </li>
            ))
        }
      </div>
    </div>
  )
}

export default AutoSearch
