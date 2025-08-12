import React, { useEffect, useState } from 'react'

const Searchwithdropdown = () => {
    const [search, setSearch] = useState("");
    const [data, setData]  = useState([]);
    const [filtereddata, setFiltereddata] = useState([]);
    const [condition, setCondition] = useState("Starts")

    useEffect(()=>{
        if(condition === "Starts"){
             setFiltereddata(data.filter((item)=>item.title.toLowerCase().startsWith(search.toLowerCase())
            ))
        }
        else if( condition === "Endswith"){
            setFiltereddata( data.filter((item)=>item.title.toLowerCase().endsWith(search.toLowerCase())
            ))
        }
        else if(condition === "Equal"){
            setFiltereddata( data.filter((item)=> item.title.toLowerCase() === search.toLowerCase()))
        }
        else
        setFiltereddata(data);


    },[search, condition, data])

    useEffect(()=>{
        fetched();
    },[])

    const fetched= async()=>{
        const res = await fetch(`https://dummyjson.com/products`)
        const val = await res.json();
        setData(val?.products);
    }

     
  return (
    <div>
        <input type="text"  placeholder="Enter your Search" onChange={(e)=> setSearch(e.target.value)}/>
      <select onChange={(e)=>setCondition(e.target.value)}>
        <option value="Starts" >Starts</option>
        <option value="Endswith" >Endswith</option>
        <option value="Equal" >Equals</option>
        <option value="All" >All</option>
      </select>
      {
        filtereddata.map((item)=>{
            return <li key= {item.id}>{item.title}</li>
        })
      }
    </div>
  )
}

export default Searchwithdropdown
