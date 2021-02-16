const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeExternals = require("webpack-node-externals");

const webpack = require("webpack");
const serverConfig = {
    mode: 'development',
    entry: './server',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.server.json'
                        }
                    }],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [{ loader: 'css-loader', options: { onlyLocals: true } }],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'inline-source-map',
}


const clientConfig = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'assets', to: 'assets' }],
        }),
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devServer: {
        watchContentBase: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

module.exports = [serverConfig, clientConfig];