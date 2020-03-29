import React, { useState, useEffect, useCallback } from 'react'
// 自定义hooks函数 - 监听浏览器窗口变化
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, []);

    useEffect(()=>{
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    },[])

    return size;
}

export default useWinSize;