import React, { Component } from 'react'

import B from './b'
import C from './c'
import D from './D'
import E from './E'

class HighComponent extends Component {
    render() {
        return (
            <div>
                <B />
                <hr />
                <C />
                <hr />
                <D name='杨紫' age='18' />
                <hr />
                <E />
            </div>
        )
    }
}

export default HighComponent;