import React, { useEffect, useState } from 'react'
import "./Drop.css";
import { Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const Dropdownselect = () => {
    const [search, setSearch] = useState("");
    const [Product, setProduct] = useState([]);

    useEffect(()=>{
        fetched();
    },[search])

    const fetched =async()=>{
        const res =  await fetch(`https://dummyjson.com/products/search?q=${search}`)
        const data = await res.json();
        if(search.length > 1)
        setProduct(data?.products);
    }

  return (
    <div>
      <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      <select className= "dropdown" name="Starts With" id="Starts With"> Starts With</select>
        <select className= "dropdown" name="Ends With" id="Ends With"> Ends With</select>
        
     
      {
        Product.map((item)=>{
            return <li key = {item.id}>{item.title}</li>
        })
      }
    </div>
  )
}

export default Dropdownselect
