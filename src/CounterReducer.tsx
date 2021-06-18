import React, {useReducer} from 'react';

type Action = {type: 'INCREASE'} | {type: 'DECREASE'} ;
// 액션을 | 으로 연달아서 나열해주기

function reducer(state: number, action: Action): number {
    switch(action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error('Unhandled action');        
    }
}

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return(
        <div>
            <h3>Counter Reducer</h3>
            <p>{count}</p>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default CounterReducer;