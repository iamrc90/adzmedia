/*
	Disable Browser Error Output
	Solution : Using try catch block - passed the error to error handler and user will see Something Broke! on page
*/


var express = require("express");
var app = express();


app.get('/', function(req,res,next) {

	try{
		var json='{"address":{"city":"Bangalore","country":"India"}}';
		var jsonparsed=JSON.parse(json);
		var address=jsonparsed.addess.city+','+jsonparsed.address.state+','+jsonparsed.address.country;
		res.send("complete address is->"+address);	
	}
	catch(err){
		next(err);
	}
	
});
       
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

// Error handler -> prints all errors in console only and send back 500 response to user web page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});