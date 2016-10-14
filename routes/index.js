var uploadFile = require('./uploadFile');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.query.tagName  == "smallChat")
  {
    res.render('Chatframe', { title: '소수 채팅방', chat_width: '800px', chat_src: '/smallChat'});
  }else if(req.query.tagName  == "bigChat")
  {
    res.render('Chatframe', { title: '다인 채팅방', chat_width: '1000px', chat_src: '/bigChat'});
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


//소수 채팅방
router.get('/smallChat', function(req, res, next) {
  res.render('small_talk');
});

//다인 채팅방
router.get('/bigChat', function(req, res, next) {
  res.render('big_talk');
});


module.exports = router;
