module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('connection', function(socket){
    //최초 접속
    socket.on('talk chat_in', function(msg){
      socket.broadcast.emit('talk chat_in', msg);
    });

    // //채팅방 나갔을 때
    socket.on('disconnect', function(){
      var outText = "(나중 세션으로 넣어)님이 퇴장하였습니다.";
      socket.broadcast.emit('talk chat_out', outText);
    });

    //메시지 교환
    socket.on('message', function(msg){
      socket.emit('my message', msg);
      socket.broadcast.emit('other message', msg);
    });
    //사진 올릴 때
    socket.on('ImgMessage', function(Img_Path){
      socket.emit('my ImgMessage', Img_Path);
      socket.broadcast.emit('other ImgMessage', Img_Path);
    });
  });

  return io;
}
