// https://api.openweathermap.org/data/2.5/weather?id=london&appid=e19ae291c8d70950cbe443d46f3b9275&units=metric

const APIKey = config.APIKey;
const APIURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=London';

const city = document.querySelector('.city');
const wind = document.querySelector('.wind');

// console.log(APIURL + `&appid=${APIKey}`);

async function checkWeather() {
  const response = await fetch(APIURL + `&appid=${APIKey}`);
  var data = await response.json();

  console.log(data);
  city.textContent = data.name;
  wind.textContent = `${data.wind.speed} km/h`;
}

checkWeather();

console.log(APIKey);
