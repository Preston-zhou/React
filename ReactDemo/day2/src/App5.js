// 组件生命周期更新期

import React, { Component } from 'react'

export default class App4 extends Component {
    // -----------------------------------------
    //第一阶段 挂载期
    constructor(props) {
        super(props)
        this.state = {
            num: 20
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
    //---------------------------------------------------------------

    //第二阶段  更新期
    UNSAFE_componentWillReceiveProps(){
        console.log("2.1  UNSAFE_componentWillReceiveProps在接收props属性之前")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("2.2 shouldComponentUpdate 可以判断修改前后的值是不是一样，不一样才去执行render。减少不必要的render优化性能")
        console.log("num的旧值为：", this.state.num)
        console.log("num的新值为：", nextState.num)
        return (this.state.num !== nextState.num)
    }
    componentDidUpdate(){
        console.log("2.5 componentDidUpdate 更新之前执行的代码");
    }
    handleClick(){
        // console.log('Ok');
        this.setState({
            num: 21
        })
    }
    render() {
        console.log("1.3 / 2.4 render 渲染标签到页面上， 填充数据到标签中");
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
            </div>
        )
    }
}
