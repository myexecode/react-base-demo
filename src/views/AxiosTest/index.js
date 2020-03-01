import React, { Component } from 'react'

import {reqTest} from '../../serves'

class AxiosTest extends Component {

    // componentDidCatch(){}
    async componentDidMount(){
        // 测试请求网易的数据2020/3/1
        let res = await reqTest({
            start: 0,
            size: 100,
            tid: 'T1582287839597',
            t: '316606198865'
        })
        console.log(res, 'res');
    }

    render() {
        return (
            <div className='axios_test'>
                axios_test
            </div>
        )
    }
}

export default AxiosTest;