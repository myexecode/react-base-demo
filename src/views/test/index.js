import React, { Component } from 'react'
import Slot from '../../components/Slot'

export default class Test extends Component {
    render() {
        return (
            <Slot>
                {{
                    a: <div>kkkkkkkkkkk</div>
                }}
            </Slot>
        )
    }
}
