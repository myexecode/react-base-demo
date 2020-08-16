import React, { Component } from 'react'
import {Consumer} from './testContext'

export default class Testa extends Component {
    render() {
        return (
            <Consumer>
                {ctx => <Testachild {...ctx} />}
            </Consumer>
        )
    }
}

function Testachild(props){
    return <div>{props.a}</div>
}