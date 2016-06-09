import path from 'path';
import webpack from 'webpack';

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(__dirname, '/../src/index.js'),
    ],
    output: {
        path: path.join(__dirname, '/../dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        hot: true,
        port: 3000,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}