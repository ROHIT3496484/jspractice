import React, { useState, useEffect } from "react";

const menuItems = [
  { id: 1, name: "Idli", price: 40 },
  { id: 2, name: "Dosa", price: 60 },
  { id: 3, name: "Vada", price: 30 },
];

const FoodMenu = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromCart(i)}>❌</button>
          </li>
        ))}
      </ul>

      <p>Total: ₹{total}</p>
    </div>
  );
};

export default FoodMenu;
