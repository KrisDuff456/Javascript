//Iteration 4

function findNumber(){
var count = 0;
var i = document.getElementById("input").value;
while (i > 1){
	if(i % 3 == 0){
		i = i / 3;
		count++;
	}else if(i % 3 !== 0){
		i = i + 1;
	}else if(i % 3 !== 0){
		i = i - 1;
	}
	document.getElementById("myCount").innerHTML = "Number of times: " + count ;
}

	console.log(count);	
}

//Strings 4 

function findTriple(){
	var tripleCount = 0;
	var str = document.getElementById("myTriple").value;
	for( var i = 0; i < str.length
	
	
	document.getElementById("countTriple").innerHTML = tripleCount;
}