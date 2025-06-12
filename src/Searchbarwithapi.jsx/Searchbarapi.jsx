import React, { useEffect, useState } from 'react'

const Searchbarapi = () => {
  const [data, setData]  = useState("");
    const [find, setFind] = useState([]);
    const fetcheddata =async()=>{
      const fetchdata = await fetch(`https://dummyjson.com/products/search?{data}`);
      const res = await fetchdata.json();
      var arr = [];
      if(data.length>0){
        arr = res.products.filter((item)=>{
          return item.title.includes(data);
        })
        
      }
      setFind(arr);
    }
    useEffect(()=>{
      fetcheddata();
    },[data]);
  return (
    <div>
      <input type="text" onChange={(e)=>setData(e.target.value)}></input>
      <div>
        {find.map((item)=>{
          return <li>
            {item.title}
          </li>
        })}
      </div>
    </div>
  )
}

export default Searchbarapi
