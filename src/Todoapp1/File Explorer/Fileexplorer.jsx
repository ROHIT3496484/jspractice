import React, { useState } from 'react'
import "./File.css"

const Fileexplorer = ({ data }) => {
    console.log(data);
    const [show, setShow]= useState(false);

    const handle=()=>{
        setShow(!show);
    }
  return (
    <div className="container">
      <h5 onClick={handle}>
        {data.type === 'folder' ? '📁' : '📄'}
        {data.name} 
      </h5>
      
        
          {show && data?.children?.map((childdata, index) => (
            <Fileexplorer key={index} data={childdata} />
          ))}
    </div>
  );
};

export default Fileexplorer