import React from 'react'

const Toast = () => {
    const handleclick =()=>{
        return(
            <div>
            Success <span>X</span>
        </div>
        )
        
    }
  return (
    <div>
        <button onClick={handleclick}>Success message </button>
        <button onClick={handleclick}>Info message</button>
        <button onClick={handleclick}>Warning message</button>
        <button onClick={handleclick}>Error message</button>
      
    </div>
  )
}

export default Toast
