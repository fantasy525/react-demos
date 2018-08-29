/**
 * Created by Administrator on 2018/4/12.
 */
const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        app:'./main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    module:{
        rules:[
            {
                test:/\.(js||jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap:true
                        }
                    },{
                    loader:"css-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
    devServer: {
        port: 8081,
        hot:true
    }
}