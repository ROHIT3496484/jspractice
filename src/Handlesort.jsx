import React, { useState } from 'react'

const Handlesort = () => {
    const data = [{item:"Ball"},{item:"Apple"}, {item:"Dog"}, {item:"Cat"}];
    const [val, setVal] = useState(data);
    const [sort, setSort] = useState(false);

    const Handlesort=()=>{
        if(!sort){
            const sorting = [...data].sort((a, b)=>{
                return a.item.toLowerCase() > b.item.toLowerCase() ? 1 : -1;
            })
            setVal(sorting);
            setSort(true);
        }
        else{
            setVal(data);
            setSort(false);
        }
    }

  return (
    <div>
        <button onClick={Handlesort}>{sort ? "unsort" : "sort"}</button>
        {
            val.map((value)=>{
                return <li>{value.item}</li>
            })
        }
      
    </div>
  )
}

export default Handlesort
