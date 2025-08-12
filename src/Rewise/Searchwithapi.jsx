import React, { useEffect, useState } from 'react'

const Searchwithapi = () => {
    const [search, setSearch] = useState("");
    const [fetcheddata, setFetcheddata] = useState([]);

    useEffect(()=>{
       if(search.length <2){
        setFetcheddata([]);
        return;
       }
        const debounce = setTimeout(()=>{
            fetched();

        }, 1000)
        return ()=> clearTimeout(debounce);
    },[search])

    console.log(search);
    const fetched=async()=>{
        const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const data = await res.json();
        setFetcheddata(data?.products || [])
        
            

    }
    console.log(fetcheddata);

  return (
    <div>
      <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      {
        fetcheddata.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })
      }
    </div>
  )
}

export default Searchwithapi;
