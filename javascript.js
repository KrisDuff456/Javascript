//Hello World
/*
var variableString ="Hello"
var variableNumber =2
var variaableObject = {name:"Kris"}
window.alert(variaableObject.name);
console.log(variableNumber);
document.write(variableString);
*/
//Function 1 * 2 
function mySum(){
     var x = document.getElementById("myInput").value;
     document.getElementById("myOutput").innerHTML = x * 2;
}

//function 2 *
function myCalculation(){
	
     var x = document.getElementById("firstNumber").value;
	 var y = document.getElementById("secondNumber").value;
	 var z = document.getElementById("thirdNumber").value;
	
     document.getElementById("myMulti").innerHTML = x * y * z ;
}
//variable 2	
    var n = document.getElementById("fName").value;
	var a = document.getElementById("myAge").value;
	var o = document.getElementById("myOccupation").value;
	document.getElementById("person").innerHTML = "Name: "+ n + " Age: " + a + " Occupation: " + o;
	
function createPerson(){
	var n = document.getElementById("fName").value;
	var a = document.getElementById("myAge").value;
	var o = document.getElementById("myOccupation").value;
	console.log(n + a + o);
	//window.alert("Your Data has been sent!");
	document.getElementById("person").innerHTML = "Name: "+ n + " Age: " + a + " Occupation: " + o;
}

//Event 1

var personObj = {name:"John Smith ",age:" 25 ",occupation:" Doctor "};

function ageAdd(){
	personObj.age = personObj.age;
	document.getElementById("age").innerHTML = personObj.name + personObj.occupation + personObj.age ++;
	console.log(personObj);
}

//String
var xName = " He said 'My name is Elliott' ";
var nameCap = xName.toUpperCase();
console.log(xName);
console.log(nameCap);

//String 2
var name = "i was number ";
var numberOne = "1";
var combo = name.concat(numberOne);
console.log(combo);

//Array & String

var games =['Mass Effect','Dragon Age','Resident Evil'];
document.getElementById("CreateHere").innerHTML = games;

function addArray(){
	    games.push("Metal Gear Solid");
		document.getElementById("CreateHere").innerHTML = games;
}

function deleteArray(){
	delete games[3];
	document.getElementById("CreateHere").innerHTML = games;
}

//Conditional
function older20(){
	older = document.getElementById("myAge").value;
	
if ( older >= 20 && older <=40){
	 document.getElementById("trueOrfalse").innerHTML = "True";
}else{
	 document.getElementById("trueOrfalse").innerHTML = "false";
}
}
//Iteration 1
var text = " ";
for(var i = 0;i <10;i++){
	text += [i] + "<br>";
	 document.getElementById("loops").innerHTML = text;
}

//Iteration 2
for(var d = 0;d<10;d++){
  if (d % 2){
document.getElementById("divisible").innerHTML = d;
}
}