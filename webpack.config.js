const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
        another: './src/another-module.js'

        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared'
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared'
        // },
        // shared: 'lodash'
    },

    devtool: 'inline-source-map',

    devServer: {
        static: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },

    optimization: {
        minimize: false,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    }
}
