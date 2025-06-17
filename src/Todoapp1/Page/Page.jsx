import React, { useEffect, useState } from 'react'
import './Page.css';

const Page = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);

    useEffect(()=>{
        const fetchdata=async()=>{
            const val = await fetch(`https://picsum.photos/v2/list?page=${pageno}&limit=5`);
            const res = await val.json();
            setData(res);
        }
        fetchdata();
    },[pageno])

    const handleprev =()=>{
        if(pageno>1){
            setPageno(pageno-1);
        }
    }
    const handlenext =()=>{
        if(pageno<20){
            setPageno(pageno+1);
        }
    }
  return (
    <div >
      {
        data.map((item)=>{
            return <img src={item.download_url} alt="img" className="image"/>
        })
      }
      <div>
        <button onClick={handleprev}>prev</button>
        <button>{pageno}</button>
        <button onClick={handlenext}>next</button>
      </div>
    </div>
  )
}

export default Page
