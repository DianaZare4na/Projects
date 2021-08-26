let apiKey = "80dc8c8983e492d4430594db2e692c9b";
let url = "https://api.openweathermap.org/data/2.5/weather?q=Mykolayiv&units=metric&appid=" + apiKey;

   

	function buildResponse(json){
		let cityName = document.querySelector('.current__city');
		let currentTmp = document.querySelector('.current__temperature');
		let description = document.querySelector('.current__description');
		let forecast__item = document.querySelector('.forecast__item');
		let forecast__temperature = document.querySelector('.forecast__temperature');
		let container = document.querySelector('.details__named');
		let forecast__icon = document.querySelector('.forecast__icon');
		let details__name = document.querySelector('.details__name');
		let details__namevl = document.querySelector('.details__namevl');
		let details__namevet = document.querySelector('.details__namevet');
			for (let obg of json.weather) {
				forecast__icon.innerHTML = `<img src = "http://openweathermap.org/img/w/${obg.icon}.png">`;
				description.innerText = obg.description;
				console.log(obg.description);
			}
			cityName.innerText = json.name;
			currentTmp.innerText =  json.main.temp + " °C";
			forecast__item.innerText = "До: " + Math.floor(json.main.temp_max) + " °C";
			forecast__temperature.innerText = "От: " + Math.floor(json.main.temp_min) + " °C";
			details__name.innerText = "Ощущается как: " + Math.floor(json.main.feels_like) + " °C";
			details__namevet.innerText = "Скорость ветра: " + json.wind.speed + " м/с";
			container.innerText = "Давление: " + Math.floor((json.main.pressure) * 0.75) + " мм.рт.ст";
			details__namevl.innerText = "Влажность: " + json.main.humidity + "%" ;
	}


	
		