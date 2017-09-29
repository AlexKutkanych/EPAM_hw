var result = document.querySelector("#result");
var body = document.querySelector("body");

if(!navigator.geolocation){
	var denied = document.createElement("p");
	denied.innerHTML = "Your browser does not support geolocation";
	result.appendChild(denied);
};

navigator.geolocation.getCurrentPosition(function(position){
	function check (error) { 
  if (error.code == error.PERMISSION_DENIED)
      console.log("you denied me :-(");
};

	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;

	//show info on page
	
	var wLocation = document.querySelector("#w-location");
	var wIcon = document.querySelector("#w-icon");
	var wDescription = document.querySelector("#w-desc");
	var wTemperature = document.querySelector("#w-temp");
	var wHumidity = document.querySelector("#w-humidity");
	var wWind = document.querySelector("#w-wind");
	var tCelcius = document.querySelector("#temp-celc");
	var tFahrenheit = document.querySelector("#temp-fahr");
	

	fetch('https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&lat=' + latitude)
		.then(function(res){
			res.json().then(function(data){
				console.log(data);
				wLocation.innerHTML = data.name + ", " + data.sys.country;
				wIcon.setAttribute("src", data.weather[0].icon);
				wDescription.innerHTML = data.weather[0].main;
				wTemperature.innerHTML = Math.round(data.main.temp);
				wHumidity.innerHTML = "<span class='brand-style'>Humidity:</span> " + Math.round(data.main.humidity) + "%";
				wWind.innerHTML = "<span class='brand-style'>Wind:</span> " + data.wind.speed + "km/h";

				//switch btw Celc and Fahr

				function showTCelcius(){
					wTemperature.innerHTML = Math.round(data.main.temp);
					tFahrenheit.classList.remove("temp-active");
					tCelcius.classList.add("temp-active");
				}


				function showTFahrenheit(){
					var tFahr = Math.round(data.main.temp * 1.8 + 32);
					wTemperature.innerHTML = tFahr;
					tFahrenheit.classList.add("temp-active");
					tCelcius.classList.remove("temp-active");
				}

				tCelcius.addEventListener("click", showTCelcius);
				tFahrenheit.addEventListener("click", showTFahrenheit);

				if(data.weather[0].main === "Clouds") {
					body.style.backgroundImage = 'url("img/clouds.jpeg")';
				} else if(data.weather[0].main === "snowy mountain") {
					body.style.backgroundImage = 'url("img/snowy-mountain.jpeg")';
				} else if(data.weather[0].main === "hot desert") {
					body.style.backgroundImage = 'url("img/hot-desert.jpeg")';
				}
			})
		})

})
		
		
