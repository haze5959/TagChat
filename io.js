module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('connection', function(socket){
    socket.on('message', function(msg){
      socket.emit('my message', msg);
      socket.broadcast.emit('other message', msg);
    });

    socket.on('ImgMessage', function(Img_Path){
      socket.emit('my ImgMessage', Img_Path);
      socket.broadcast.emit('other ImgMessage', Img_Path);
    });
  });

  return io;
}
