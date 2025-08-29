import React, { useState } from 'react'

const Dropdown = () => {
    const data= [
    "Apple",
    "Orange",
    "Mango",
    "Banana",
    "Grapes",
    "Pineapple",
  ];
    const [input, setInput] = useState("");
    const [res, setRes] = useState(data); 
    const [selectval, setSeletctval] = useState("Startswith")

    const Handlefilter=()=>{
        switch(selectval){
            case "Startswith":
                return res.filter((item)=>
                item.toLowerCase().startsWith(input.toLowerCase()
            ));
            case "Endswith":
                return res.filter((item)=>{
                    return item.toLowerCase().endsWith(input.toLowerCase())
                });
            case "Equal":
                return res.filter((item)=>{
                    return item.toLowerCase()=== input.toLowerCase();
                });


            

            
        }
    }
    

    const Filtereddata = Handlefilter();

  return (
    <div>
      <input type="text" onChange={(e)=> setInput(e.target.value)} />
      <select value={selectval}  onChange={(e)=>setSeletctval(e.target.value)}>
        <option value="Startswith">Startwith</option>
        <option value="Endswith">Endswith</option>
        <option value="Equal">Equal</option>
        <option value="All">All</option>
      </select>

     {
        Filtereddata.map((item)=>{
            return <li>{item}</li>
        })
     }
    </div>
  )
}

export default Dropdown
