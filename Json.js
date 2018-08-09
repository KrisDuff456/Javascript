//JSON 1 
let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

//request.onload;

function loadJson(){
	let requestData = request.response;
	let heroHeading = document.createElement('h2');
	    heroHeading.textContent = requestData['squadName'];
		document.getElementsByTagName('body')[0].appendChild(heroHeading);
}