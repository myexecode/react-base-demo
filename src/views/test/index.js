import React, { Component } from 'react'
import Tif from '../../components/Tif'
import {Button} from 'antd-mobile'

export default class Test extends Component {

    
    render() {
        return (
            <div>
                <Tif $if={true} >aaa</Tif>
                <Button type='primary' >按钮</Button>
            </div>
        )
    }
}
