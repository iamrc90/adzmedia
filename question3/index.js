/* Resolve scope issue in this simple example, we are ought to get exact sum values as mentioned in the text of console.logs, you are allowed to change as little as possible, and not allowed to change variable names in it. */
var async = require('async');
var Chance = require('chance');
var chance = new Chance();
sum=100;//master sum value
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
	console.log("Sum from last waterfall level:"+result);
});
function myFirstFunction(callback) {
	var var1=chance.natural({min: 1, max: 100});
	var var2=chance.natural({min: 1, max: 100});
	var sum=var1+var2;
	console.log("SUM master is:"+this.sum);
	console.log("Function Level: First, var1: "+var1+", var2: "+var2+", Sum:"+sum);
    callback(null, sum);
}
function mySecondFunction(sum, callback) {
	var var1=chance.natural({min: 1, max: 100});
	var var2=chance.natural({min: 1, max: 100});
	console.log("Sum from previous waterfall level:"+sum);
	var sum=var1+var2;
	console.log("Function Level: First, var1: "+var1+", var2: "+var2+", Sum:"+sum);
    callback(null, sum);
}
function myLastFunction(sum, callback) {
	var var1=chance.natural({min: 1, max: 100});
	var var2=chance.natural({min: 1, max: 100});
	console.log("Sum from previous waterfall level:"+sum);
	var sum=var1+var2;
	console.log("Function Level: First, var1: "+var1+", var2: "+var2+", Sum:"+sum);
    callback(null, sum);
}

/*
	Output at the time of testing 
		SUM master is:100
		Function Level: First, var1: 58, var2: 86, Sum:144
		Sum from previous waterfall level:144
		Function Level: First, var1: 31, var2: 68, Sum:99
		Sum from previous waterfall level:99
		Function Level: First, var1: 40, var2: 14, Sum:54
		Sum from last waterfall level:54
*/

// I just changed the console.log code position and for global context master sum I added (this.sum) that gives me value of master sum variable.
