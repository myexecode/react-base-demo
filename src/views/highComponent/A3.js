import React from 'react'

const modifyPropsHoc = WrappedComponent => class NewComponent extends WrappedComponent {

    // 设置 高阶组件显示名
    static displayName = `NewComponent${getDisplayName(WrappedComponent)}`;

    componentWillMount(){
        console.log('我是修改后的e组件生命周期');
    }
    render(){
        const element = super.render();
        const newStyle = {
            color: element.type === 'div' ? 'red' : 'green'
        }
        const newProps = {...this.props, style: newStyle};
        return React.cloneElement(element, newProps, element.props.children)
    }
}
function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'no';
}
export default modifyPropsHoc;