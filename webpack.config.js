const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
    },

    devtool: 'inline-source-map',

    devServer: {
        static: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
    ],

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },

    optimization: {
        minimize: false,
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }
}
