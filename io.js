module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('connection', function(socket){
<<<<<<< HEAD
    socket.on('message', function(msg){
      socket.emit('my message', msg);
      socket.broadcast.emit('other message', msg);
=======
      socket.on('message', function(msg){
        console.log(msg);
        socket.emit('my message', msg);
        socket.broadcast.emit('other message', msg);
>>>>>>> origin/master
    });
  });

  return io;
}
