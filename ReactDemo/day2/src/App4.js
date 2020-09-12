// 组件生命周期挂载期

import React, { Component } from 'react'

export default class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 10
        }
        console.log("1.1 constructor 初始化组件");
    }
    UNSAFE_componentWillMount() {
        console.log("1.2 在挂载之前需要执行的代码")
    }
    componentDidMount() {
        console.log("1.4 在挂载之后需要执行的代码")

        // 在componentDidMount 做异步请求
    }
    
    handleClick(){
        console.log('Ok');
    }
    render() {
        console.log("1.3 render 渲染标签到页面上， 填充数据到标签中");
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
            </div>
        )
    }
}
