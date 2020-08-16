import React, { Component } from 'react'

function A(WrappedComponent){
    return class A extends Component {
        render(){
            return (
                <div>
                    <div className='header' style={{height: '100px', background: 'pink'}}>
                        高阶组件header
                    </div>
                    <WrappedComponent></WrappedComponent>
                </div>
            )
        }
    }
}

export default A;