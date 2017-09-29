var result = document.querySelector("#result");

if(!navigator.geolocation){
	var denied = document.createElement("p");
	denied.innerHTML = "Your browser does not support geolocation";
	result.appendChild(denied);
}

navigator.geolocation.getCurrentPosition(function(position){
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;

	//show info on page
	var wLocation = document.querySelector("#w-location");
	var wIcon = document.querySelector("#w-icon");
	var wDescription = document.querySelector("#w-desc");
	var wTemperature = document.querySelector("#w-temp");
	var wHumidity = document.querySelector("#w-humidity");
	var wWind = document.querySelector("#w-wind");
	fetch('https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&lat=' + latitude)
		.then(function(res){
			res.json().then(function(data){
				console.log(data);
				wLocation.innerHTML = data.name + ", " + data.sys.country;
				wIcon.setAttribute("src", data.weather[0].icon);
				wDescription.innerHTML = data.weather[0].main;
				wTemperature.innerHTML = Math.round(data.main.temp) +" &#8451;";
				wHumidity.innerHTML = "Humidity: " + Math.round(data.main.humidity) + "%";
				wWind.innerHTML = "Wind: " + data.wind.speed + "km/h";
			})
		})
})
		
		
