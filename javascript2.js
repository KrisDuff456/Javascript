//Iteration 4
"use Strict"; 
function findNumber(){
var count = 0;
var i = document.getElementById("myInput").value;
while (i > 1){
	if(i % 3 == 0){
		i = i / 3;
		count++;
		document.getElementById("myCount").innerHTML = "Number of times: " + count;
	}else {
		var myAdd = i + 1;
        var mySub = i - 1;
		
		if (i % 3 !== 0){
			i = myAdd;
			count++;
			document.getElementById("myCount").innerHTML = "Number of times: " + count;
			
	}else if(i % 3 !== 0){
		    i = mySub;
			count++;
			document.getElementById("myCount").innerHTML = "Number of times: " + count;
	}	
}
    if (i < 1 || i == 1){
		document.getElementById("myCount").innerHTML = "Number of times: " + count;
		count++;
		break;
	console.log(count);
	}
  }
}

//Strings 4 

function findTriple(){
	let tripleCount = 0;
	let str = document.getElementById("myTriple").value;
	for( let i = 0; i < str.length;i++){
		if(str[i] == str[i+1] && str [i+1] ==str[i +2]){
		tripleCount++;
		
		}
		document.getElementById("countTriple").innerHTML = tripleCount;
		console.log(tripleCount);
	}
	
}

//DOM
function createPara(){
	let p = document.createElement("p");
	let para = document.createTextNode("This could be a paragraph?");
	
	p.appendChild(para);
	p.setAttribute("id", "myP");
	
	document.getElementById("Hello").appendChild(p);
	console.log("Entry Created")
}
   function deletePara(){
	 let oldChild = document.getElementById("myP");
	 oldChild.parentNode.removeChild(oldChild);
	 console.log("Delete Entry");
}

function changePara(){
	let newChild = document.getElementById("myP");
	let newPara = document.getElementById("entryPara").value;
	document.getElementById("myP").innerHTML = newPara;
	console.log("Changed original text");
	
}


