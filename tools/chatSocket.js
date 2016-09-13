
class ChatSocket {
  constructor(socket) {
    this.name = 'test';
    this.users = [];

    this.setupEventListeners(socket);
  }

  setupEventListeners(socket) {
    socket.emit('init', {
      name: name,
      users: this.users
    });

    socket.broadcast.emit('user:join', {
      name: name
    });

    socket.on('send:message', function (data) {
      socket.broadcast.emit('send:message', {
        user: name,
        text: data.text
      });
    });

    socket.on('disconnect', function () {
      socket.broadcast.emit('user:left', {
        name: name
      });
    });
  }
}

export default ChatSocket;
