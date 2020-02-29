import React, { Component } from 'react'

import OldFn from './oldFn'
import NewFn from './newFn'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            isOld: true
        }
    }

    changeNumHandler = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    changeCopHandler = () => {
        this.setState({
            isOld: !this.state.isOld
        })
    }

    render() {
        return (
            <div className='life_cycle'>
                {
                    this.state.isOld ?
                        <OldFn pNum={this.state.num} />
                        :
                        <NewFn pNum={this.state.num} />
                }
                <button onClick={this.changeNumHandler} style={{width: '100%', marginTop: '10px'}}> 更改子组件的 props</button>
                <button onClick={this.changeCopHandler} style={{width: '100%', marginTop: '10px'}}>切换组件</button>
            </div>
        )
    }
}

export default LifeCycle;