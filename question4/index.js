/*
	Fibonacci Series Print Via Async Funtion callback
	input : 15
	output  : 	Process completed - Async Function
				1
				1
				2
				3
				5
				8
				13
				21
				34
				55
				89
				144
				233
				377
				610
				done
	
*/

// function def
var fibonacciSeries = function(val,callback){
    process.nextTick(function(){
    	//logic 
    	var first = 0, second = 1, next = 1;
    	for(var i = 1; i <= val; i++) {
    		console.log(next);
        	next = first + second;
        	first = second;
        	second = next;
        }
        // trigger callback
        callback(null,"done");
    });
};

// Total Terms
noOfTerms = 15;


// calling the function

fibonacciSeries(15,function(err,data){
	if(err) console.log(err);
	else console.log(data);
});

console.log("Process completed - Async Function");