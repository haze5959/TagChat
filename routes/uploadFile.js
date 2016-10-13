//파일 업로드를 위한 js
var multer = require('multer');
var dateFormat = require('dateformat');
var fs = require('fs');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    //오늘 날짜 폴더 생성하고
    var now = new Date();
    var filePath = "./public/uploads";
    now = dateFormat(now, "yyyy-mmmm-dS");
    global.uploadFoler = filePath + "/" + now;

    if (!fs.existsSync(global.uploadFoler)){
        fs.mkdirSync(global.uploadFoler);
        console.log('dir writed - ' + global.uploadFoler);
    }

    callback(null, global.uploadFoler);
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
