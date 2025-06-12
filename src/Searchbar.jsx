import React, { useEffect, useState } from 'react'
import "./index.css";
import data from"./data.json";

const Searchbar = () => {
    
    const [val, setVal] = useState("");
    const [find, setFind]  = useState([]);

    useEffect(()=>{
        var arr = [];
        arr = data.filter((item)=>{
            return item.name.toLowerCase().includes(val.toLowerCase());
        })
        setFind(arr);
    },[val])
  return (
    <div className="container">
      <input type="text" onChange={(e)=> setVal(e.target.value)}></input>
      <div>
        {
            find.map((item, idx) => (
                <li key={idx}>
                    {item.name}
                </li>
            ))
        }
      </div>
    </div>
  )
}

export default Searchbar
