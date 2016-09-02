var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TagChat 설계' });
});




//임시 채팅방 테스트
router.get('/test', function(req, res, next) {
  res.render('dalkom_talk', { title: '1:1 채팅방' });
});

module.exports = router;
