//Fizz Buzz
function buzzFizz(){
for (var i =0;i < Math.floor(Math.random() * 101); i++){
	if ( i % 3 == 0 ){
		document.getElementById("fizzBuzz").innerHTML = "The number is: " + i + " Fizz";
	}else if ( i % 5 == 0 ){
		document.getElementById("fizzBuzz").innerHTML ="The number is: " + i + " Buzz";
	}else{
		document.getElementById("fizzBuzz").innerHTML ="The number is: " + i + " Fizz Buzz";
	}
	console.log(i);
}
}