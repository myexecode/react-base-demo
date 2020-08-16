import React, { Component } from 'react'

// 代理高阶组件
// 传参 访问ref 抽取状态 包装组件

export default (title) => WrappedComponent => {
    
    return class A2 extends Component {

        constructor(props){
            super(props)
            this.state = {
                value: ''
            }
        }
        changeInputValue = (e) => {
            this.setState({
                value: e.target.value
            },()=>{
                console.log(this.state.value)
            })
            
        }

        refc = (instance) => {
            // instance.getName && console.log(instance.getName())
        }
        render() {
            let {age, ...otherProps} = this.props;
            const inputProps = {
                defaultValue: this.state.value,
                onInput: this.changeInputValue
            }
            return (
                <div>
                    <div className='header' style={{height: '100px', background: 'pink'}}>
                        高阶组件header：{title}
                    </div>
                    <WrappedComponent sex='女' {...otherProps} ref={this.refc} inputProps={{...inputProps}} />
                </div>
            )
        }
    }
}

