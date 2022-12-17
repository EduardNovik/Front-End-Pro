const appid = '5d066958a60d315387d9492393935c19'
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const city = document.querySelector('#city') 
const units = document.querySelector('#units')
const weather = document.querySelector('.weather')
weather.style.display = "none";

btn.addEventListener('click', getData)


function getData(e) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=${units.value}&APPID=${appid}`;
  e.preventDefault();

  fetch(url)
    .then((resolve) => {
      if (!resolve.ok) throw new Error(resolve.statusText);
      return resolve.json();
    })
    .then((data) => {
      showWeather(data)
    }).catch(data => showError(data));
}


function showWeather (data){
    weather.style.display = "flex";
    const units = document.querySelector("#units");

     weather.innerHTML = 
     `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="" class="icon">
     <h1 class="city-name">${data.name}</h1>
     <b class="temp">${data.main.temp} ${units.value ==='metric'? '°C':'°F'}</b>
     <p class="pressure">Pressure: ${data.main.pressure} hPa</p>
     <p class="humidity">Humidity: ${data.main.humidity} %</p>
     <p class="speed">Wind speed: ${data.wind.speed} ${units.value ==='metric'? 'm/s':'mph'}</p>
     <p class="deg">Wind direction: ${data.wind.deg} °</p>
     <b class="description">${data.weather[0].description}</b>`
}


function showError (data) {
  weather.style.display = "flex";
  weather.innerHTML = `<h3 class="city-name">${data}</h3>`
}

