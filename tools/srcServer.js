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

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
