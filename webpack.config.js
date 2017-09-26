const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 生成Source Maps
    devtool: 'eval-source-map',
    // 打包步骤
    entry: __dirname + "/app/main.js",// 唯一入口文件
    output: {
        path: __dirname + "/build",//打包后文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    // 实时监听并更新页面内容
    devServer: {
        contentBase: "./public",//本地服务器加载的页面所在的目录
        stats: {color: true},//终端中输出结果为彩色
        historyApiFallback: true,// 不跳转
        inline: true,// 实时刷新
        hot: true
    },
    // 配置Babel
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },{
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Copyright'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
