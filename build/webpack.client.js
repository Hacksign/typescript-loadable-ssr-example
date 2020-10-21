const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
    devtool: process.env.NODE_ENV == 'development' ? 'cheap-module-source-map' : undefined,
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: path.resolve(__dirname, '../src/client/entry-web.tsx'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/web'),
        libraryTarget: 'umd',
        publicPath: '/static/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: (module) => {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                }
            }
        }
    },
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
