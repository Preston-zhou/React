import React, { Component } from 'react'
import PropsTypes from 'prop-types'


class ChildChild extends Component{
    //3 获取context里面的类型及属性
    static contextTypes = {
        title: PropsTypes.string
    }


    render() {
        return (
            <div>
                {this.context.title}
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                <ChildChild />
            </div>
        )
    }
}





export default class App2 extends Component {
    //2 在父组件中书写组件的类型
    static childContextTypes = {
        title: PropsTypes.string
    }


    //1 把要传递给子孙组件的值写在getChildContext 返回对象中
    getChildContext(){
        return {
            title: "标题2222"
        }
    }
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        )
    }
}
