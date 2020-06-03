import React, { useState } from 'react'

export default function ButtonPad() {
    
    const [count, setCount] = useState(0);

    const decrementClick = () => {
        setCount(count - 1)
    }

    const incrementClick = () => {
        setCount(count + 1);
    }

    const resetClicks = () => {
        setCount(0);
    }

    return (
        <div className="wrapper">
            <button 
                className="main dec"
                onClick={decrementClick}
            >
                - 1
            </button>
            <span className="main count">{count}</span>
            <button 
                className="main inc" 
                onClick={incrementClick} 
            >
                + 1
            </button>

            <button className="reset" onClick={resetClicks}>reset</button>
        </div>
    )
}
