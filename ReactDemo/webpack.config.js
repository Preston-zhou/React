const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//创建一个插件的实例对象
// const htmlplugin = new HtmlWebpackPlugin({
//     template: path.join(__dirname, './src/index.html'),
//     filename: 'index.html'
// })

module.exports = {
    mode: 'production',    //development  production
    plugins:[   //配置插件的节点
        new htmlWebpackPlugin({   //创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),   //指定模板页面
            //将来会根据此页面生成内存中的页面
            filename:'index.html'   //指定生成页面的名称，index.html浏览器才会默认直接打开
        })
    ]
}