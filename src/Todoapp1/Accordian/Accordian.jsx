import React, { useState } from 'react'
import data from './Accordia.json'
import "./Acco.css"

const Accordian = () => {
    const [show, setShow] = useState(null);
    return (
        <div>
            <h1>FAQs</h1>
            <div>
                {data.map((item) => (
                    <div key={item.id} className="Questions">
                        <h3 >
                            {item.Question}
                            <span onClick={() => setShow(show === item.id ? null : item.id)}>
                                {show === item.id ? "-" : "+"}
                            </span>
                             
                        </h3>
                       {show === item.id && <p>{item.Answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordian
