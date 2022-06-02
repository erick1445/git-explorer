import { useState } from 'react';

export function Counter() {
    const [ counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter ++);
    }
    

    return (
        <div>
            <h2>0</h2>
            <button type="button" onClick={increment}>
                increment
            </button>
        </div>
    );
}