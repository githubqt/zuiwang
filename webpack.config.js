var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    devtool: 'eval-source-map',//配置打包测试
    entry: __dirname + "/src/js/index.js",
    output: {
        path: __dirname + "/bulid/js",
        filename: "index.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            //{
            //    test: /\.js$/,
            //    loader: 'babel-loader'
            //},
            //{
            //    test: /\.jsx$/,
            //    loader: 'babel-loader!jsx-loader?harmony'
            //},
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'//在webpack的module部分的loaders里进行配置即可
                //以下代码可以在.babelrc中设置 webpack 可以加载编译
                //query: {
                //    presets: ['es2015', 'react']
                //}
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'//添加对样式表的处理
            }
        ]
    },
    plugins: [
        //commonsPlugin
        require('autoprefixer'),//调用autoprefixer插件
        new webpack.BannerPlugin("Copyright zuiwang.win.")//在这个数组中new一个就可以了
    ],
    devServer: {
        contentBase: "./health",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 8000//实时刷新
    }
};