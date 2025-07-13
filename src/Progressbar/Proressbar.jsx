import React, { useEffect, useState } from 'react'
import "./Progress.css";

const Proressbar = () => {
    const [bar, setBar] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            const interval = setBar((prevbar)=>{
                 if(prevbar>= 100){
                    clearInterval(interval);
                    return prevbar
                 }
                 return prevbar + 5;           
            });
            return()=> clearInterval(interval);
        },150)
        
    },[])
  return (
    <div className="container">
        <div style={{transform: `translateX(${bar- 100}%)`}}
         className="progress">
        </div>
      
    </div>
  )
}

export default Proressbar
