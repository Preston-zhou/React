import React, { Component } from 'react'
import Proptypes from 'prop-types'

class Child extends Component {
    handleClick(){
        //点击按钮的时候调用父组件传过来的方法
        this.props.fatherChange(30)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
                <div>{this.props.children}</div>
            </div>
        )
    }
}


export default class App3 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            num: 20
        }
    }
    //在父组件中传递一个方法给子组件调用
    fatherChange(value){
        this.setState({
            num: value
        })
    }
    render() {
        return (
            <div>
                <Child fatherChange={this.fatherChange.bind(this)}>{this.state.num}</Child>
            </div>
        )
    }
}
