var express = require('express');
var logger = require( './log4js-conf' ).logging.getLogger( 'Login' );

var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.email);
  console.log(req.body.password);
  logger.info("Successfully Logged in ", req.body.email);
  res.render('main', { name: req.body.email });
  
});

module.exports = router;
