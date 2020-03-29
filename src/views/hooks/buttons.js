import React, { useContext } from 'react'

import { CountContext } from './userRedux'

function Buttons() {

    let { dispatch } = useContext(CountContext);

    return (
        <div>
           <button onClick={()=>{dispatch({type: 'change', count: 1})}}>change 1</button>
           <button onClick={()=>{dispatch({type: 'change', count: 2})}}>change 2</button>
        </div>
    )
}

export default Buttons;