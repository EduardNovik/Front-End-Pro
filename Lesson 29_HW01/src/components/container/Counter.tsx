import React, { useState } from 'react';
import './counterStyle.css'

const Main = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
        return value
    }

    const decrement = () => {
        setValue(value - 1)
        return value
    }
    
    return (
        <main>
            <h1 className='counterValue'>{value}</h1>
            <button style={{marginRight:10}} onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </main>
    );
};

export default Main;