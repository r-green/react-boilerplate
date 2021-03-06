import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev.config';

const app = new express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));

app.get('/*', function response(req, res) {
    res.sendFile(path.join(config.output.path + 'index.html'));
});

app.listen(config.devServer.port, error => {
    /* eslint-disable no-console */
    if (error) {
        console.error(error);
        return;

    } else {
        console.log('Listening at http://localhost:' + config.devServer.port);
    }
});


