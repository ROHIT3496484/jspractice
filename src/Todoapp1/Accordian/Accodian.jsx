import React, { useState } from 'react'
import data from './Accordia.json'
const Accodian = () => {
    const [show, setShow] = useState(null);
  return (
    <div>
      <h1>FAQs</h1>
      <span>
        {
        data.map((item, index)=>{
            return <li>
                {item.Question} 
                <span onClick={()=>{setShow(
                    show === index ? null : index
                )}}>{show === index ? "-" :"+"}</span>
                {show === index && 
                <p>{item.Answer}</p>}
            </li>
        })
      }
      </span>
      
    </div>
  )
}

export default Accodian

