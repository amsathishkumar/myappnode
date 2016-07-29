var express = require('express');
var multer = require('multer');

var router = express.Router();

var sUpload = multer({
	dest: __dirname,
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log("onFileUploadStart");      },
    onFileUploadComplete: function (file) {
    	 console.log("onFileUploadComplete");
    },
    changeDest: function(dest, req, res) { 
    	console.log("changeDest");
        return dest;
    },
    onFileSizeLimit: function (file) {
    	console.log("onFileSizeLimit");
    }
});

function scomplete (req, res){
	res.status(200).send("File upload to sat complete\n");
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('SAT demo');
});

router.post('/', sUpload,scomplete);

module.exports = router;