var express = require('express');
var multer = require('multer');

var router = express.Router();
var done = false;
var satjson;

var sUpload = multer({
	dest: __dirname,
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log("onFileUploadStart");      },
    onFileUploadComplete: function (file) {
    	 console.log("onFileUploadComplete");
    	 done = true;
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
	if (done === true){
		res.status(200).send("File upload to sat complete\n");
	}
	else{
		res.status(500).send("Internal error occurred during file upload\n");
		}
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('SAT demo');
	//res.json([{"id": 1,"name":"sathishkumar","age":32,"mail":"satjson@gmail.com"}]);
	res.json(satjson);
});

router.post('/info', function (req, res, next) {
	console.log("started");
	satjson=req.body;
	console.log(satjson); 
	
});

router.post('/', sUpload,scomplete);

module.exports = router;