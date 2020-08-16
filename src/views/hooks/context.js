import React, { useContext, useMemo } from 'react'

import { CountContext } from './userRedux'

function Context({ name }) {

    let { count } = useContext(CountContext);

    const propsfn = () => {
        return name;
    }

    
    let getname = useMemo(() => propsfn(), [name]); // 只有name发生改变时才执行propsfn函数，节省性能

    return (
        <div>
            {getname}

            {count}
        </div>
    )
}

export default Context;