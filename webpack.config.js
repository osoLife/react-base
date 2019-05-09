const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html'
});

module.exports = {
    mode: 'development', // development or production
    plugins: [
        htmlWebpackPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/

            }
        ]
    }
};