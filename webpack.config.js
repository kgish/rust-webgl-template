const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = (env, args) => {
    const production = args.mode === 'production';

    return {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: production ? '[name].[contenthash].js' : '[name][hash].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new WasmPackPlugin({
                crateDirectory: path.resolve(__dirname, ".")
            }),
            // Have this example work in Edge which doesn't ship `TextEncoder` or
            // `TextDecoder` at this time.
            new webpack.ProvidePlugin({
                TextDecoder: ['text-encoding', 'TextDecoder'],
                TextEncoder: ['text-encoding', 'TextEncoder']
            })
        ],
        mode: 'development'
    }
};
