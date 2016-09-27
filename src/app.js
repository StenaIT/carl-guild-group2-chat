import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);

import SocketIO from 'socket.io';

const io = SocketIO(server);

let messages = [];
let users = [];

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  socket.on('register_user', user => {
    users.push(user);
    socket.broadcast.emit('user_connected', user);
  });

  socket.emit('init', messages);

  socket.on('send_message', message => {
    console.log('Message received: ' + message.text);
    messages.push({text: message.text, user: message.user });

    io.emit('message_received', message)
  });

  socket.on('disconnect', () => {
    console.log('User disconnected!');
  });
});



server.listen(3000, () => {
  console.log('Carld Guild Chat listening on port 3000!');
});
