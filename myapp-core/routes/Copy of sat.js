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
    	console.log("file"+file);
        console.log("onFileUploadStart");   
        },
    onFileUploadComplete: function (file) {
    	 console.log("onFileUploadComplete");
    	 done = true;
    },
    changeDest: function(dest, req, res) { 
    	console.log("changeDest");
    	var newdest = dest + "/files";
    	dest =newdest;
        return dest;
    },
    onFileSizeLimit: function (file) {
    	console.log("onFileSizeLimit");
    }
    
});

function scomplete (req, res){
	if (done === true){
		console.log("completed....................");
		res.status(100).send("File upload to sat complete\n");
	}
	else{
	   res.status(500).send("Internal error occurred during file upload\n");
		}
}

function getsat(req,res){
	res.send(req.params);
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


function sat(req,res){
	console.log("sat");
	var k="sathish";
	sUpload(req,res, function(err){
		if (err){
			return res.end("errror")
		}
		console.log("rere");
		res.end("uploaded")
	});
}

//curl -F filedata=@sat.txt -X POST 'http://localhost:3000/sat/upload'
router.post('/upload', sUpload,scomplete);
router.post('/upload1',sat);

router.post("/:dm/:from-:to",getsat);


module.exports = router;