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
        <div>
            {count}
            <button onClick={decrementClick}>click</button>
            <button onClick={incrementClick} >click</button>
            <button onClick={resetClicks}>Reset</button>
        </div>
    )
}
