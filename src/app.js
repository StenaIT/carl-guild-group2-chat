import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);

import SocketIO from 'socket.io';

const io = SocketIO(server);

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  console.log('Connected!');
  socket.emit('init');

  socket.on('send_message', data => {
    console.log('Message received: ' + data.message);
  });
});

server.listen(3000, () => {
  console.log('Carld Guild Chat listening on port 3000!');
});
