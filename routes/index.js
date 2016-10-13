var uploadFile = require('./uploadFile');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.query.tagName  == "1:1")
  {
    res.render('oneoneChat', { title: '1:1 채팅방' });
  }
  else
  {
    res.render('index', { title: 'TagChat 설계' });
  }
});


//파일 업로드 테스트
router.post('/upload', function(req, res, next) {

  //파일 업로드
  uploadFile(req,res,function(err) {
        if(err) {
          console.log("에러다 - " + err);
            return res.end("Error uploading file.");
        }

        res.end(req.file.path);
    });
});


//임시 채팅방 테스트
router.get('/test', function(req, res, next) {
  res.render('dalkom_talk', { title: '1:1 채팅방' });
});


module.exports = router;
