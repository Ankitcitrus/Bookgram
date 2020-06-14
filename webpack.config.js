const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
        })
    ],
    node: {
        dns: 'empty',
        crypto: 'empty',
        net: 'empty',
        tls: 'empty'
    },resolve: {
        extensions: ['.js'],
        alias: {
            fs: path.resolve(__dirname, 'mock-fs.js')
        }
    }
}
