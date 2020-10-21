const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
    devtool: process.env.NODE_ENV == 'development' ? 'cheap-module-source-map' : undefined,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: {
        main: path.resolve(__dirname, '../src/client/entry-node.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/node'),
        libraryTarget: 'commonjs2',
        publicPath: '/static/',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [
        new LoadablePlugin(),
    ],
}
