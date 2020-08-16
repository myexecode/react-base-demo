import React, { Component } from 'react'
import { Provider } from './testContext'
import Testa from './testa'
const store = {
    a: 1
}

class test extends Component {

    render() {
        return (
            <Provider value={store} >
                <Testa />
            </Provider>
        )
    }
}

export default test;