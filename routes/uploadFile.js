//파일 업로드를 위한 js
var multer = require('multer');
var fs = require('fs');
var dateFormat = require('dateformat');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    //오늘 날짜 폴더 생성하고
    var now = new Date();
    var filePath = "./public/uploads";
    now = dateFormat(now, "yyyy-mmmm-dS");
    filePath = filePath + "/" + now;

    var temp = fs.readdirSync(filePath, function (err, files)  {
      if(!err){ //에러가 없다면
        //폴더가 이미 존재하므로 아무것도 안하고 패스~
      }else{
        fs.mkdir(filePath, '0777', function(err2){
        	if(err2){
            console.log("폴더가 안만들어 짐");
          }
        	console.log('dir writed - ' + filePath);
        });
      }
    });

    callback(null, filePath);
  },
  filename: function (req, file, callback) {

    file.uploadedFile = {
            name: req.params.filename,
            type: file.mimetype.split('/')[0]
          };

    callback(null, Date.now()  + '-' + file.originalname);

  }
});

var uploadFile = multer({ storage : storage}).single('chatOneOne');


module.exports = uploadFile;
