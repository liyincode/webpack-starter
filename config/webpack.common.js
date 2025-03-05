const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
        new webpack.ProvidePlugin({
            join: 'lodash/join',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },
};
