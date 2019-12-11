const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html', to: ''},
            {from: 'src/css', to: 'css'}
        ])
    ]
}
