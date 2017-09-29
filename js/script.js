var result = document.querySelector("#result");

if(!navigator.geolocation){
	var denied = document.createElement("p");
	denied.innerHTML = "Your browser does not support geolocation";
	result.appendChild(denied);
}

navigator.geolocation.getCurrentPosition(function(position){
	console.log(position);
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;
	fetch('https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&lat=' + latitude)
		.then(function(res){
			res.json().then(function(data){
				console.log(data.name);
			})
		})
})
		
		
