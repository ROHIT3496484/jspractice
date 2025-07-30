import React, { useEffect, useState } from 'react'

const Searchapi = () => {
    const [search, setSearch]  = useState("");
    const [val, setVal] = useState([]);

    useEffect(()=>{
        const debounce = setTimeout(()=>{

            const fetched =async ()=>{
                const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
                const data = await res.json();
                const arr = data.products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))
                if(search.length > 1)
                    setVal(arr);

            }
            fetched();

        },3000)
        return ()=> setTimeout(debounce);
    },[search])
  return (
    <div>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" />
        {
            val.map((item)=>{
                return <li key= {item.id}> {item.title}</li>
            })
        }
      
    </div>
  )
}

export default Searchapi
