import React, { Component } from 'react'

import routerList from '../../routers'

import './home.scss'
import 'antd-mobile/dist/antd-mobile.css';

class Home extends Component {

    routerJumpFn(route){
        // console.log(route, 'routte')
        this.props.history.push(route.path);
        // this.props.history.push({pathname: route.path, query: {a: 1}})
    }

    render() {
        // console.log(routerList, 'routerList')
        return (
            <div className='home'>
                {
                    routerList.map((rItem, rindex) => {
                        return (
                            <div className='router_item' key={rindex} onClick={this.routerJumpFn.bind(this,rItem)}>{rItem.sNavTitle}</div>
                        )
                    })
                }
                <div className='vwBtn'>杨紫</div>
            </div>
        )
    }
}

export default Home;