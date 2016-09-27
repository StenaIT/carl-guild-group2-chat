import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);

import SocketIO from 'socket.io';

const io = SocketIO(server);

let messages = [];
let users = [];

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  let userName = {};

  socket.on('register_user', user => {
    userName = user;
    users.push(user);
    io.emit('user_connected', { user, users });
  });

  socket.emit('init', messages);

  socket.on('send_message', message => {
    messages.push({text: message.text, user: message.user });
    io.emit('message_received', message)
  });

  socket.on('disconnect', () => {
    users.splice(users.indexOf(userName), 1);
    io.emit('user_disconnected', { user: userName, users })
  });
});

server.listen(3000, () => {
  console.log('Carl Guild Chat listening on port 3000!');
});
