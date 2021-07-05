import React, {useState} from 'react';

function Counter() {
const [ count, setCounter ] = useState<number>(0);

const onIncrease = () => setCounter(count +1);
const onDecrease = () => setCounter(count -1);

    return(
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;