const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
    devtool: process.env.NODE_ENV == 'development' ? 'cheap-module-source-map' : undefined,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: {
        server: path.resolve(__dirname, '../src/server/index.tsx')
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
}
