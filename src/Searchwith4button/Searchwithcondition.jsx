import React, { useEffect, useState } from 'react'

const Searchwithcondition = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [searcheddata, setSearchedData] = useState([]);

    const handleStart =()=>{
        setSearchedData(
      data.filter((item) =>
        item.title.toLowerCase().startsWith(search.toLowerCase()) // ✅ Correct filter
      )
    );
  };

  const handleendswith = ()=>{
    setSearchedData(data.filter((item) =>{
        return item.title.toLowerCase().endsWith(search.toLowerCase());
    }))
    
  }

  const equalto = ()=>{
    setSearchedData(data.filter((item)=>{
        return item.title.toLowerCase() === search.toLowerCase();
    }))
  }

  const All =()=>{
    setSearchedData(data);
  }

    useEffect(()=>{
        fetched();
    },[]);

    const fetched=async()=>{
        const res = await fetch(`https://dummyjson.com/products`);
        const productdata = await res.json();
        setData(productdata?.products); 
    }
  return (
    <div>
      <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
      <button onClick={handleStart}> starts with</button>
      <button onClick={equalto}> Equal to </button>
      <button onClick={All} > All</button>
      <button onClick={handleendswith}>Ends With</button>
      {
        searcheddata.map((item)=>{
            return <li className = "list" key={item.id}>{item.title}</li>
        })
      }
    </div>
  )
}

export default Searchwithcondition
