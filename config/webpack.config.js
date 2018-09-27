const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        aplication: path.resolve(__dirname, '..','module/Application/src/app.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MaviControl'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '..', 'public')//,
        //publicPath: '/'
    }
}