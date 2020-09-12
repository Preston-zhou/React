// 父传子
import React, { Component } from 'react'

class Header extends Component{    //子组件

    render() {
        return (
            <div style={{width:"100%", height:40, lineHeight:"40px", backgroundColor: this.props.bgc}}>
                {this.props.title}
            </div>
        )
    }
}
export default class App7 extends Component {   //父组件

    constructor(props) {
        super(props)

        this.state = {
            title: '标题组件'
        }
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} bgc="#cff"></Header>
                <Header title="列表页标题" bgc="pink"></Header>
            </div>
        )
    }
}
