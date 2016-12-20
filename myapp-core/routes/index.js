var express = require('express');
var ltx = require('ltx');
var router = express.Router();
var _ = require( 'lodash' )

/* GET home page. */
router.get('/', function(req, res, next) {
//   var msg = new ltx.Element('iq', {
//        type: 'get'
//    } )
//    .c( 'GetCommand', {
//        xmlns: 'jabber:client'
//    } ).c( 'Parameter' ).c( 'Name' ).c( 'name' ).t('sathish' ).root();
//
//      console.log("xml"+ msg) 
// 
//  res.render('index', { title: 'SAT Express' });

//var rmsg = "<ResourceUsageResponse><Response><ResponseCode>0</ResponseCode></Response><ResourceTypeUsageReport><DeviceId>MyDeviceXYZ</DeviceId><ResourceType>TUNER</ResourceType><ResourceUnits><ResourceUnit><ResourceId>0</ResourceId></ResourceUnit><ResourceUnit><ResourceId>1</ResourceId><ResourceUsage><SessionId>SESSION-1</SessionId><Activity>VIEW</Activity><SMID>LQSM</SMID><ClientDeviceId>AADEADBEAFAA</ClientDeviceId></ResourceUsage></ResourceUnit><ResourceUnit><ResourceId>2</ResourceId></ResourceUnit><ResourceUnit><ResourceId>3</ResourceId></ResourceUnit><ResourceUnit><ResourceId>4</ResourceId><SharedResourceUsage><ResourceUsage><SessionId>SESSION-2</SessionId><Activity>VIEW</Activity><SMID>LQSM</SMID><ClientDeviceId>AABBCCDDEEFF</ClientDeviceId></ResourceUsage><ResourceUsage><SessionId>SESSION-3</SessionId><Activity>RECORD</Activity><SMID>LQSM</SMID></ResourceUsage></SharedResourceUsage></ResourceUnit><ResourceUnit><ResourceId>5</ResourceId>";
	var rmsg ="<ResourceUsageResponse><Response><ResponseCode>0</ResponseCode></Response><ResourceTypeUsageReport><DeviceId>MyDeviceXYZ</DeviceId><ResourceType>TUNER</ResourceType>" +
			"<ResourceUnits>" +
			   "<ResourceUnit><ResourceId>0</ResourceId></ResourceUnit>" +
			   "<ResourceUnit><ResourceId>1</ResourceId><ResourceUsage><SessionId>SESSION-1</SessionId><Activity>VIEW</Activity><SMID>LQSM</SMID><ClientDeviceId>AADEADBEAFAA</ClientDeviceId></ResourceUsage></ResourceUnit>" +
			   "<ResourceUnit><ResourceId>2</ResourceId></ResourceUnit>" +
			   "<ResourceUnit><ResourceId>3</ResourceId></ResourceUnit>" +
			   "<ResourceUnit>" +
			       "<ResourceId>4</ResourceId><SharedResourceUsage><ResourceUsage><SessionId>SESSION-2</SessionId><Activity>VIEW</Activity>" +
			       "<SMID>LQSM</SMID><ClientDeviceId>AABBCCDDEEFF</ClientDeviceId></ResourceUsage><ResourceUsage>" +
			       "<SessionId>SESSION-3</SessionId><Activity>RECORD</Activity><SMID>LQSM</SMID></ResourceUsage></SharedResourceUsage>" +
			   "</ResourceUnit>" +
			   "<ResourceUnit>" +
			        "<ResourceId>5</ResourceId><ResourceUsage><SessionId>SESSION-4</SessionId><Activity>RECORD</Activity><SMID>LQSM</SMID></ResourceUsage>" +
			   "</ResourceUnit>" +
			   "<ResourceUnit><ResourceId>6</ResourceId></ResourceUnit>" +
			   "<ResourceUnit><ResourceId>7</ResourceId></ResourceUnit>" +
			   "</ResourceUnits>"+
               "</ResourceTypeUsageReport>" +
               "<ResourceTypeUsageReport>" +
                 "<DeviceId>MyDeviceXYZ</DeviceId>" +
                 "<ResourceType>STREAMER</ResourceType>" +
                 "<ResourceUnits>" +
                      "<ResourceUnit>" +
                         "<ResourceId>0</ResourceId>" +
                         "<ResourceUsage><SessionId>SESSION-1</SessionId><Activity>VIEW</Activity><SMID>LQSM</SMID><ClientDeviceId>AADEADBEAFAA</ClientDeviceId></ResourceUsage>" +
                       "</ResourceUnit>" +
                 "</ResourceUnits>" +
                 "</ResourceTypeUsageReport>" +
               "</ResourceUsageResponse>";	
var msg = ltx.parse(rmsg);
console.log("xml"+ msg) ;

res.render('index', { title: 'SAT Express' });
	
});

module.exports = router;
