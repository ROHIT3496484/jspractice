import React, { useEffect, useState } from 'react'
import "./Bar.css";

const Bar = () => {
    const[barx, setBarx] = useState(0);
    useEffect(()=>{
         setInterval(()=>{
            const interval = setBarx((prev)=>{
                if(prev >= 100){
              clearInterval(interval);
              return prev;
            }
            return prev +5;
        });
            return()=>{
                clearInterval(interval);
            }
            

        }, 150);
    })
  return (
    <div className="container">
        <div style={{transform : `translateX(${barx - 100}%)`}} className="progress">

        </div>
      
    </div>
  )
}

export default Bar
