import React, { useState, useEffect, useRef } from 'react'

import Context from './context'
import Buttons from './buttons'
import { UserRedux } from './userRedux' // hooks状态共享

import useWinSize from './customHooksFn'

function Hooks() {

    // 状态
    const [count, setCount] = useState(0);

    // 生命周期
    useEffect(() => {
        console.log(`useEffect=>componentDidMount/componentDidUpdate you clicked ${count} times`);

        return () => {
            console.log('离开， componentWillUnmount');
        }
        // 不传第二个参数则监听所有状态的变化
        // 第二个参数为空数组则只有再组件销毁时才执行return回去的函数且不再执行update
        // 当第二个数组中有值时表示只监听数组中的值的变化
    }, [count])

    const inputEl = useRef(null);
    const changeInputFn = () => {
        inputEl.current.value = 'yangzi';
        console.log(inputEl);
    }

    let widowSize = useWinSize();

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <hr />
            hooks状态共享
            <UserRedux >
                <Buttons />
                <Context name='yangzi' />
            </UserRedux>
            <hr />
            <div>获取useRef dom结构</div>
            <input ref={inputEl} />
            <button onClick={changeInputFn}>input</button>
            <hr />
            <div>
                窗口大小：{widowSize.width} - {widowSize.height}
            </div>
        </div>
    )
}

export default Hooks;