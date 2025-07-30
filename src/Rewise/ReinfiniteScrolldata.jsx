import React, { useEffect, useState } from 'react'
import ReInfiniteScroll from './ReInfiniteScroll'

const ReinfiniteScrolldata = () => {
    const [page, setPage] = useState(1);
    const [val, setVal] = useState([]);

    useEffect(()=>{
        fetchdata();
    }, [page])
    const fetchdata= async()=>{
        const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=3`)
        const data = await res.json();
        setVal(data);
    }
  return (
    <div>
      <ReInfiniteScroll page = {page} val = {val} />
    </div>
  )
}

export default ReinfiniteScrolldata
