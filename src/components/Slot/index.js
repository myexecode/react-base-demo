import React, { Component } from 'react'

export default class Slot extends Component {
    render() {
        console.log(this.props, '-----------')
        const {children} = this.props;
        const childs = [];
        if(children.$$typeof || typeof children === 'string'){
            childs.push(children)
        }else{
            for(let item in children){
                childs.push(children[item])
            }
        }
        return (
            <div>
                {
                    childs.map((item, index) => {
                        return <div key={`child${index}`} >{item}</div>
                    })
                }
            </div>
        )
    }
}
