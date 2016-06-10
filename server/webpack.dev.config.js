import path from 'path';
import webpack from 'webpack';

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/../src/index.js'),
    ],
    output: {
        path: path.join(__dirname, '/../dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        noInfo: true,
        pubicPath: '/',
        stats: {
            colors: true
        },
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}