//JSON 1 
let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();



request.onload = function loadJson(){
	let requestData = request.response;

	let heroHeading = document.createElement('h2');
	    heroHeading.textContent = requestData['squadName'];
		document.getElementsByTagName('body')[0].appendChild(heroHeading);
		
    let heroCity = document.createElement("p");
	    heroCity.textContent = "Current Location: " + requestData['homeTown'] + " //  Created: " + requestData['formed'] + " //  Current Active Status: " + requestData['active'];
		document.getElementsByTagName('body')[0].appendChild(heroCity);
}
function showHero(requestData){
	
	let myheroes = requestData['members'][0][1];
		
		for(let i = 0; i < myheroes.length;i++){
			
			let heroName = document.createElement('p');
			let powerList = document.createElement('ul');
			let myHero = document.createElement('article');
			
			heroName.textContent = myheroes[i].name;
			heroName.textContent = "Secret Identity: " + myheroes[i].secretIdentity;
			heroName.textContent = "Age: " + myheroes[i].age;
			heroName.textContent = "Superpowers: ";
			
		    let superPowers = myheroes[i].powers;
			for (var p = 0; p < superPowers.lenght; p++){
				let listPower = document.createElement('li');
				listPower.textContent = superPowers[p];
				powerList.appendChild(listPower);
		}
		 myHero.appendChild(heroName);
		 myHero.appendChild(powerList);
		 
		 section.appendChild(myHero);
}

}

