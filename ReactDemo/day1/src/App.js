// 组件化开发 (react项目用es6模块化规范来书写)

// 1、引入核心模块
import React from 'react'

// 2、定义一个组件
class App extends React.Component{

    render(){   //渲染
        return (
            <div>第一个组件</div>
        )
    }
}


// 3、 导出组件

export default App