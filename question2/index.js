/*
	Reading a file async or sync based on user choice 
	command line args 
	1) pass the file to read 
	2) pass true for synchronous reading ( async by default )
	eg : run node index.js test.txt true
*/


var fs = require('fs');
if( process.argv.length > 2 ) {
	var filePath = process.argv[2];
	var isSync = process.argv[3] || false;

	try {
		if(isSync === true) {

			// Read File Synchronously 
			console.log("Reading a File synchronously....");
			var data = fs.readFileSync(filePath,'utf-8');
			console.log(data);
			console.log("complete");

		} else {

			// Read File Asynchronously 
			console.log("Reading a File asynchronously....");
			fs.readFile(filePath, 'utf8',function (err,data) {
				if (err) {
    				return console.log(err);
  				}
 				console.log(data);
			});
			
			console.log("complete");
		}
	}catch(err) {

		console.log(err.stack);

	}
}else {
	console.log("please pass complete params");
}