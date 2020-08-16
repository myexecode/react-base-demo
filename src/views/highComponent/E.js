import React, { Component } from 'react'
import A3 from './A3'

class E extends Component {
    componentWillMount(){
        console.log('我是e组件生命周期')
    }
    render() {
        return (
            <div>
                我是e组件
            </div>
        )
    }
}
export default A3(E);