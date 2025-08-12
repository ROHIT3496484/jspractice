import { useState } from "react"
import "./Foodcart.css"

const FoodMenumore =()=>{

    const [cart, setCart] = useState([]);

    const handleAdd=(item)=>{
        setCart((prev)=>[...prev, item])
    }

    const handleRemove=(id)=>{
        setCart((prev)=> prev.filter((item)=>
            item.id !== id ));
    }
    const Menu = [
        {name:"Coke", price:" RS 20", id: 1 },
        {name:"Veg Pizza", price:" RS 70" , id: 2 },
        {name:"Veg Burger", price:" RS 30" , id: 3 },
        {name:"Chicken Burger", price:" RS 60" , id: 4 },
        {name:"Pizza", price:" RS 50" , id: 5 }
    ]

    return(
        <div>
            <h1>Menu Card</h1>
            {
                Menu.map((item)=>{
                    return <li className="listmenu" key={item.id}>{item.name} <span>  </span> {item.price} <span>        </span> <button onClick = {()=>handleAdd(item)}>Add </button></li>
                })
            }
            <h1>Cart</h1>
            {
                cart.map((item)=>{
                    return <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                })
            }
        </div>
    )

}
export default FoodMenumore;