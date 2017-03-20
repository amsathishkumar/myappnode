var events = require('events');
var eventEmitter = new events.EventEmitter();
var logger = require( './log4js-conf' ).logging.getLogger( 'satemit' );

// listener #1
var listner1 = function listner1() {
	logger.info('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  logger.info('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

function satemitcomplete (){
	    eventEmitter.emit('connection'),
	    logger.info("sat emit completed....................");
}

exports.satemitcomplete = satemitcomplete;

