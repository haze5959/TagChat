var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get 들어왔다");

  console.log(JSON.parse(req.query));
  if(req.query.tagName  == "1:1")
  {
    console.log("성공!!");
    //res.redirect('index');
    //res.location('http://localhost:3000/');
    //res.redirect('http://google.com');
    // fs.readFile('dalkom_talk',function(error, data){
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.end(data);
    // });

    //res.render('dalkom_talk', { title: '1:1 채팅방' });
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



module.exports = router;
