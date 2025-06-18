import React, { useEffect, useState } from 'react'
import Post from './Post'

const Infinite = () => {
    const [pageno, setPageno] = useState(1);
    const [val, setVal] = useState([]);
    useEffect(()=>{
       const fetchData = async () => {
            const data = await fetch(`https://picsum.photos/v2/list?page=${pageno}&limit=3`);
            const res = await data.json();
            
            setVal((prev) =>{
              const all =[...prev, ...res];
              const unique = Array.from(new Map(all.map((item)=>[item.id, item])).values());
              return unique;
            }); 
        };
        fetchData();
    },[pageno]);
  return (
    <div>
      <Post val ={val} setPageno= {setPageno}/>
    </div>
  )
}

export default Infinite
