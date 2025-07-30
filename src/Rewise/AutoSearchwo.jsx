import React, { useEffect, useState } from 'react'

const AutoSearchwo = () => {
    const data = [{
        name: "Apple"
    },
    {
        name: "Ball"
    },
    {
        name: "Cat"
    }
];

const [search, setSearch] = useState("");
const [val, setVal] = useState([]);

useEffect(()=>{
    const debounce = setTimeout(()=>{
        const arr = data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
        if(search.length > 1)
        setVal(arr);
    }, 300)
    return ()=> setTimeout(debounce);
},[search])
  return (
    <div>
        <input onChange={(e)=> setSearch(e.target.value)} type="text" />
        {
            val.map((item)=>{
                return <li> {item.name}</li>
            })
        }
      
    </div>
  )
}

export default AutoSearchwo
