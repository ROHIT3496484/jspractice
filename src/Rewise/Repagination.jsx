import React, { useEffect, useState } from 'react'

const Repagination = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(()=>{
        Fetchdata();
    },[page])

    const Fetchdata= async()=>{
        const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
        const val = await res.json();
        setData(val);
    }

    const handlenext=()=>{
        if(page < 20){
            setPage(page => page+1);
        }
    }

    const handleprev =()=>{
        if(page >1){
            setPage(page -1);
        }
    }
  return (
    <div>
        {
            data.map((item)=>{
               return <img height = {100} src={item.download_url} alt="img" />
            })

            
        }
        <div>{page > 1 ?<button onClick={handleprev}>prev</button> : "" }
            <button onClick={()=>{}}>{page}</button>
            <button onClick={handlenext}>next</button></div>
      
    </div>
  )
}

export default Repagination
