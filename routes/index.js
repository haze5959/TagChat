var express = require('express');
var router = express.Router();
//var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get 들어왔다");

  if(req.query.tagName  == "1:1")
  {
    res.render('oneoneChat', { title: '1:1 채팅방' });
  }
  else
  {
    res.render('index', { title: 'TagChat 설계' });
  }
});




//임시 채팅방 테스트
router.get('/test', function(req, res, next) {
  res.render('dalkom_talk', { title: '1:1 채팅방' });
});

router.get('/test2', function(req, res, next) {
  res.render('index_origin', { title: '실험실험' });
});


module.exports = router;
