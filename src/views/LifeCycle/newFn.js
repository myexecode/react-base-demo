import React, { Component } from 'react'

class NewFn extends Component {

    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
        console.log('constructor 组件初始化');
    }
    
    // 新
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps, 组件将要挂在/组件将要跟新 静态生命周期函数');
        // 返回的结果将会与state合并，返回null时state不变化
        // return null;
        return {
            newValue: '添加的新state状态'
        };
    }

    componentDidMount(){
        console.log('componentDidMount 组件渲染完毕');
    }

    shouldComponentUpdate(nextProps, nexState){
        console.log('shouldComponentUpdate props改变或state改变，是否更新');
        return true;
    }

    // 新
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate 更新前获取快照');
        return '更新前获取快照';
    }

    componentDidUpdate(prevProps, prevState, info){
        console.log('componentDidUpdate 组件更新完毕;' + info);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount 组件将要销毁')
    }


    // changeNumHandler
    changeNumHandler = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        console.log('render');
        return (
            <div className='new_fn' style={{background: 'yellow'}}>
                <div>new fn</div>
                <div>state: {this.state.num}</div>
                <button onClick={this.changeNumHandler}>改变 state</button>
                <div>props: {this.props.pNum}</div>
            </div>
        )
    }
}

export default NewFn;