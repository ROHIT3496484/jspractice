import React, { useRef, useState } from 'react'
import "./Otp.css";
import { number } from 'yup';

const Otp = () => {
    const [arr, setArr] = useState(["", "", "", "", "", ""]);
    var ref = useRef([]);

   const handleKeydownchange=({e, index})=>{

   }
  return (
    <div>
        <h3>OTP</h3>

      {
        arr.map((item, index)=>{
            return <input type="text" className="otp" onKeyDown={(e)=>handleKeydownchange(e, index)} />
        })
      }
    </div>
  )
}

export default Otp
