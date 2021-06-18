import React, {useReducer} from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action = {type: 'SET_COUNT'; count: number} | {type: 'SET_TEXT'; text: string} |
              {type: 'SET_COLOR'; color: Color} | {type: 'TOGGLE_GOOD'} ;

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count  // count가 자동완성되며, number 타입인걸 알 수 있습니다.
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color // color가 자동완성되며, Color 타입인걸 알 수 있습니다.
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error('Unhandled action');    
    }
}            

function ReducerSample() {
    const [state, dispatch] = useReducer(reducer,{
        count: 0,
        text: 'Hi',
        color: 'red',
        isGood: true
    });

    const setCounter = () => dispatch({type: 'SET_COUNT', count: 5});
    const setText = () => dispatch({type: 'SET_TEXT', text: 'Bye'});
    const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'});
    const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'});

    return(
        <div>
            <h3>Reducer Sample</h3>
        </div>
    );
}

export default ReducerSample;