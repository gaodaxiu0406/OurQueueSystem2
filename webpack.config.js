let path=require('path');
let HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',//入口文件
    output: {//出口配置
        path:path.resolve('build'),//出口文件路径
        filename: "bundle.js"//出口文件名称
    },
    devtool: "source-map",
    module: {
        rules
:
[
    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
          {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
          {test:/\.css$/,use:['style-loader','css-loader']},
          {test:/\.(jpg|png|gif|eot|svg|ttf|woff)$/,use:'url-loader'}
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({//自动产出html文件
            template:'./src/index.html'
        })
    ]
};