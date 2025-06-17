import React, { useEffect, useState } from 'react'

const AutoSearchwitapi = () => {
    const [val, setVal] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            const fetchdata=async()=>{
                const prod = await fetch(`https://dummyjson.com/products/search?q=${val}`)
                const res =await prod.json();
                const arr = res.products.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()));
                if(val.length>1)
                setData(arr);
            }
            fetchdata();
        }, 300)
        return ()=> setTimeout(debounce);
    },[val])

  return (
    <div>
      <input type="text" onChange={(e)=>setVal(e.target.value)}/>
      <div>
        {
            data.map((item)=>{
                return <li key={item.id}>
                    {item.title}
                </li>
            })
        }
      </div>
    </div>
  )
}

export default AutoSearchwitapi
