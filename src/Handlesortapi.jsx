import React, { useEffect, useState } from 'react'

const Handlesortapi = () => {
    const [data, setData] = useState([]);
    const [originaldata, setOriginaldata] = useState([]);
    const [sort, setSort] = useState(false);

    useEffect(()=>{
        fetched();
    },[]);

    const fetched =async()=>{
        const res = await fetch(`https://dummyjson.com/products`)
        const val = await res.json();
        setData(val.products);
        setOriginaldata(val.products);
    }

    const Sortfunc =()=>{
        if(!sort){
            const sorted = [...data].sort((a,b)=>
                a.title.toLowerCase()<b.title.toLowerCase() ? 1 : -1
            )
            setData(sorted);
            setSort(true);
        }
        else{
            setData(originaldata);
            setSort(false);
        }
    }

  return (
    <div>
      <button onClick={Sortfunc}> {sort? "Unsort" : "Sort"}</button>
      {data.map((item)=>{
        return <li>{item.title}</li>
      })}
    </div>
  )
}

export default Handlesortapi
