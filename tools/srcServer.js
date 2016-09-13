'use strict';

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

import server from 'http';
const http = server.Server(app);

import socket from 'socket.io';
const io = socket(http);

import chatSocket from './chatSocket';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/public/test.html');
});

app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', chatSocket);

app.listen(port, (err) => {
  if (!err) {
    open(`http://localhost:${port}`);
  }
});
