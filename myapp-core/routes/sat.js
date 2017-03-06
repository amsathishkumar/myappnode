var express = require('express');
var multer = require('multer');

var router = express.Router();
var done = false;

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
    	res.status(100).send("File upload to sat complete\n");
        return dest;
    },
    onFileSizeLimit: function (file) {
    	console.log("onFileSizeLimit");
    }
    
});

function scomplete (req, res){
	if (done === true){
		console.log("completed....................");
		res.status(200).send("File upload to sat complete\n");
	}
	else{
	   res.status(500).send("Internal error occurred during file upload\n");
		}
}


var sUpload1 = multer({
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
function sat(req,res){
	console.log("sat");
	sUpload1(req,res, function(err){
		if (err){
			return res.end("errror");
		}
		console.log("rere");
		res.status(200).send("File upload to sat complete\n");
	});
}
function satc(file){
	console.log("satc");
	console.log(file);
}
//curl -F filedata=@sat.txt -X POST 'http://localhost:3000/sat/upload' -w "%{http_code}"
router.post('/upload', sUpload,scomplete);
router.post('/upload1',sat);

router.post('/upload2',function(req, res, next) {
	var mUpload = multer({
		dest: __dirname,
	    rename: function (fieldname, filename) {
	        return filename;
	    },
	    onFileUploadStart: function (file) {
	    	console.log("file"+file);
	    	done = false;
	        console.log("onFileUploadStart");   
	        },
	    onFileUploadComplete: function (file) {
	    	 console.log("onFileUploadComplete");	 
	    	 setTimeout(function(){
	    		 console.log("completed");
	    	 },100);	    	 
	    	 done = true;
	    	 satc(file);
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
    mUpload(req, res, function(){
       	console.log("Done value"+done);
    });
})



module.exports = router;