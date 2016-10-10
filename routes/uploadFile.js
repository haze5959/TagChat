//파일 업로드를 위한 js
var multer = require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {

    file.uploadedFile = {
            name: req.params.filename,
            ext: file.mimetype.split('/')[1]
          };

    callback(null, Date.now()  + '-' + file.originalname);
  }
});

var uploadFile = multer({ storage : storage}).single('chatOneOne');
module.exports = uploadFile;
