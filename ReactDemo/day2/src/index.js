// index.js就是react项目的入口文件(名字不要改变)

// 1、引入核心模块
import React from 'react'
import ReactDom from 'react-dom'
import App from './App4'


// 2、 把对应的内容渲染到id 为root的标签上

// ReactDom.render(参数1, 参数2)
// 参数1 作为root内部内容， 参数2 渲染到/public/index.html 中的哪个标签
ReactDom.render(
    <App />,
    document.getElementById('root')
)