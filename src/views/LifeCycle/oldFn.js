import React, { Component } from 'react'

class OldFn extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
        console.log('constructor,组件初始化');
    }

    // componentWillMount
    UNSAFE_componentWillMount(){
        console.log('componentWillMount->UNSAFE_componentWillMount 组件挂载完毕，将要渲染');
    }
    
    componentDidMount(){
        console.log('componentDidMount 组件渲染完毕');
    }

    //  componentWillReceiveProps
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps->UNSAFE_componentWillReceiveProps 父组件更新props');
    }

    //  componentWillUpdate
    UNSAFE_componentWillUpdate(nextProps, nexState){
        console.log('componentWillUpdate->UNSAFE_componentWillUpdate 组件即将更新');
    }

    shouldComponentUpdate(nextProps, nexState){
        console.log('shouldComponentUpdate props改变或state改变，是否更新');
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate 组件更新完毕;');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount 组件将要销毁');
    }

    // changeNumHandler
    changeNumHandler = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        console.log('render 45');
        return (
            <div className='old_fn' style={{background: 'pink'}}>
                <div>old fn</div>
                <div>state: {this.state.num}</div>
                <button onClick={this.changeNumHandler}>改变 state</button>
                <div>props: {this.props.pNum}</div>
            </div>
        )
    }
}

export default OldFn;