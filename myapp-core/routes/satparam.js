var express = require('express');
var router = express.Router();

function getsat(req,res){
	res.send(req.params);
}

//action="/satparam/232/theni-chennai"
router.get("/:dm/:from-:to",getsat);

module.exports = router;