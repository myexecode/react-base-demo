import React, { Component } from 'react'

import A from './a'
@A
class B extends Component {
    render() {
        return (
            <div>
                高阶组件内容b
            </div>
        )
    }
}

export default B;