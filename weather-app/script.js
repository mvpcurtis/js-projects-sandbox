const APIKey = config.APIKey;
const APIURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

let city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const weatherIcon = document.querySelector('.weather-icon');
const input = document.getElementById('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  checkWeather(input.value);
});

async function checkWeather(searchCity) {
  console.log(APIURL + `&q=${searchCity}` + `&appid=${APIKey}`);
  const response = await fetch(APIURL + `&q=${searchCity}` + `&appid=${APIKey}`);
  let data = await response.json();
  console.log(data);
  city.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  wind.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;

  const conditions = data.weather[0].main.toLowerCase();
  if (conditions === 'clear') {
    weatherIcon.src = './images/clear.png';
  } else if (conditions === 'clouds') {
    weatherIcon.src = './images/clouds.png';
  } else if (conditions === 'drizzle') {
    weatherIcon.src = './images/drizzle.png';
  } else if (conditions === 'mist') {
    weatherIcon.src = './images/mist.png';
  } else if (conditions === 'rain') {
    weatherIcon.src = './images/rain.png';
  } else if (conditions === 'snow') {
    weatherIcon.src = './images/snow.png';
  }
}
// console.log(APIURL + `&appid=${APIKey}`);

/*

chicken chow mein
mushroom curry
satay sauce / swap
egg fried rice
chicken balls
chips

*/
