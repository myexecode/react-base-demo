import React, { Component } from 'react'
import {connect} from 'react-redux'

class ReduxTest extends Component {

    addNumHanler = () => {
        let {num} = this.props;
        this.props.SETnumFn&&this.props.SETnumFn(++num);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>{this.props.num}</div>
                <button onClick={this.addNumHanler}>点击</button>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        num: state.reduxTest.num
    }
}, (dispatch) => {
    return {
        SETnumFn: (num) => {
            dispatch({type: 'SETnum', num})
        }
    }
})(ReduxTest);