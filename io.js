module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('connection', function(socket){
    socket.on('message', function(msg){
      console.log(msg.content + " 하고 " + msg.color);

      socket.emit('my message', msg);
      socket.broadcast.emit('other message', msg);
    });
  });

  return io;
}
