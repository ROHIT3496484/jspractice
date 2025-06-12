import React, { useEffect, useState } from 'react'
import "./Page.css"
const Pagination = () => {
    const [pageno, setPageno] = useState(1);
    const [data, setData] = useState([]);
    const fetchpage =async()=>{
        const link = await fetch(`https://picsum.photos/v2/list?page=${pageno}&limit=10`)
        const res = await link.json();
        setData(res);
    }
    useEffect(()=>{
        fetchpage();
    },[pageno])

    const handleprev=()=>{
        if(pageno >1){
            setPageno(pageno-1);
        }
    }
    const handlenext=()=>{
        if(pageno <20){
            setPageno(pageno+1);
        }
    }
  return (
    <div>
      <div >
        {
            data.map((item)=>{
            return <img src={item.download_url} className="images"/>})
        }
      </div>
      <div>
        <button onClick={handleprev}>prev</button>
        <button>{pageno}</button>
        <button onClick={handlenext}>next</button>
      </div>
    </div>
  )
}

export default Pagination
