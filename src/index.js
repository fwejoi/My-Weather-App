import "./styles.css";
const weatherContainer = document.querySelector("#weather-container");
const input = document.querySelector('input[type="text"]');

input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        const cityName=input.value.trim();
        if(cityName){
            getWeatherData(cityName);
            input.value="";
        }
    }
});

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`
  );
  if (response.status === 200) {
    const weatherData = await response.json();
    const newData = processData(weatherData);
    displayData(newData);
  } else {
    displayError(
      "Data cannot be queried due to wrong city name or network, etc."
    );
  }
}

function processData(weatherData) {
  const myData = {
    condition: {
      text: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
    },
    feelsLike: {
      f: Math.round(weatherData.current.feelslike_f),
      c: Math.round(weatherData.current.feelslike_c),
    },
    currentTemp: {
      f: Math.round(weatherData.current.temp_f),
      c: Math.round(weatherData.current.temp_c),
    },
    wind: Math.round(weatherData.current.wind_mph),
    humidity: weatherData.current.humidity,
    location: weatherData.location.name.toUpperCase(),
  };

  return myData;
}

function displayData(myData) {
  document.getElementById("location").innerText = myData.location;
  document.getElementById("condition").innerHTML = `
        <img src="${myData.condition.icon}" alt="${myData.condition.text}">
        <p>${myData.condition.text}</p>
    `;
  document.getElementById("temperature").innerText = `
        Current Temperature: ${myData.currentTemp.c}°C (${myData.currentTemp.f}°F)
    `;
  document.getElementById("feelsLike").innerText = `
        Feels Like: ${myData.feelsLike.c}°C (${myData.feelsLike.f}°F)
    `;
  document.getElementById("wind").innerText = `Wind Speed: ${myData.wind} mph`;
  document.getElementById("humidity").innerText =
    `Humidity: ${myData.humidity}%`;
}

// 显示错误信息的函数
function displayError(message) {
    document.getElementById('error-message').textContent = message;
}


getWeatherData("Wuhan");
