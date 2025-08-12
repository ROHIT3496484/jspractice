import React, { useEffect, useState } from 'react'

const Searchdishes = () => {
    const Dishes =[
        "Cake", "Pie", "Burger", "Pizza", "Sandwitch", "Coke"
    ]

    const [dish, setDish] = useState(Dishes);
    const [search, setSearch] = useState("");
    var arr = [];

    useEffect(()=>{
        const debounce =
            setTimeout(()=>{
                if(search.length > 1){
                    arr = Dishes.filter((item)=> item.toLowerCase().includes(search.toLowerCase()));
                    setDish(arr);
                }
                else{
                    setDish(Dishes);
                }
            }, 1000)

            return ()=> clearTimeout(debounce);
        

    }, [search])

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {
        dish.map((item, index)=>{
            return <li key={index}>{item}</li>
        })
      }
    </div>
  )
}

export default Searchdishes
