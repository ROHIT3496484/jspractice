import React, { useState } from 'react'

const Todoapp = () => {
    const [data, setData] = useState([]);
    const [val, setVal]  = useState("");

    const handlechange = (e) => {
        setVal(e.target.value); // Remove setTimeout for instant update
    };

    const handleadd = () => {
        if (val.trim() !== "") {
            setData((prev) => [...prev, val]);
            setVal("");
        }
    };

    const handlerm = (indexToRemove) => {
        setData((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add Task"
                value={val}
                onChange={handlechange}
            />
            <button onClick={handleadd}>Add</button>
            <div>
                {data.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handlerm(index)}>done</button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Todoapp