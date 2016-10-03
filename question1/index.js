var async = require('async');
var request = require('request');

var Urls = ['url-1','url-2','url-3','url-4','url-5']; // array of urls

async.eachSeries(Urls,function (url, callback) { // iterate over each Url and send request


/* 
 *********** We can send request like this : For demo purpose only I am printing the url order to console....********

request(url, function (err, res, body) {

  	// Do something with response 
  	// if some err occured then it will break in between and print error to console.
  	console.log(url);	
    callback(err);
});
*/ 
  
		 setTimeout(function(){
		 	console.log(url);
		 	callback();
		 },2000); // 2 seconds wait for next call

},function (err) {  // Final Callback
	if(err){
		console.log("some error");
	} else{
		console.log('completed');	
	}
});