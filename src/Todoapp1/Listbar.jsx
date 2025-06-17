import React, { useState } from 'react'

const Listbar = () => {
    const [val, setVal] = useState("");
    const [data, setData] = useState([]);

    const handleadd=()=>{
        setData((prev)=>[...prev, val]);
        setVal("");
    }

    const handledone=(i)=>{
        setData((prev)=>prev.filter((_, idx)=> idx !==i));
    }
  return (
    <div>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/><button onClick={handleadd}>Add</button>

      <div>
        {data.map((item, index)=>{
             return <li>
                {item}
                <button onClick={()=>handledone(index)}>done</button>
            </li>
        }
        )}
      </div>
    </div>
  )
}

export default Listbar
