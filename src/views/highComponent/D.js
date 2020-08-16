import React, { Component } from 'react'

import A2 from './a2'

class D extends Component {
    getName = () => {
        return '我是d组件'
    }
    render() {
        return (
            <div>
                <div>名字：{this.props.name}</div>
                <div>年龄：{this.props.age?this.props.age:'16'}</div>
                <div>性别：{this.props.sex}</div>
                高阶组件内容 d
                <input {...this.props.inputProps} />
            </div>
        )
    }
}

export default A2('d组件')(D);