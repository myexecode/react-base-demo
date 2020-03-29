import React, { createContext, useReducer } from 'react'

export const CountContext = createContext({});

const reducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return action.count;
        default:
            return state;
    }
}

export const UserRedux = props => {
    let [count, dispatch] = useReducer(reducer, 0);
    return (
        <CountContext.Provider value={{ count, dispatch }}>
            {props.children}
        </CountContext.Provider>
    )
}
