import React, { Component } from 'react'

class SRouter extends Component {

    render() {
        console.log(this.props.match.params); // 路由参数
        return (
            <div className='s_router'>
                路由的基本配置
            </div>
        )
    }
}

export default SRouter;