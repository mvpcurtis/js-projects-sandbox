const APIKey = config.APIKey;
let APICity = 'London';
const APIURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

let city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const weatherIcon = document.querySelector('.weather-icon');
const input = document.getElementById('input');
const button = document.querySelector('button');

const capFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const searchCity = () => {
  APICity = capFirstLetter(input.value);
  console.log(APICity);
  checkWeather();
};

button.addEventListener('click', searchCity);

async function checkWeather() {
  console.log(APIURL + `&q=${APICity}` + `&appid=${APIKey}`);
  const response = await fetch(APIURL + `&q=${APICity}` + `&appid=${APIKey}`);
  let data = await response.json();
  console.log(data);
  city.textContent = APICity;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  wind.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;
}
// console.log(APIURL + `&appid=${APIKey}`);
