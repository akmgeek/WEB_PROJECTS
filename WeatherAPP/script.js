// const apiKey = '8268a916c3cb4c81b3d185255232704'; // replace with your own API key
// const city = 'New York'; // replace with the name of the city you want to get the weather for
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
// const getWeatherButton = document.querySelector('#getWeatherButton');
// const getWeatherButton = document.getElementById("#getWeatherButton")
document.addEventListener('DOMContentLoaded', () => {

const weatherButton = document.querySelector('#weatherButton');

weatherButton.addEventListener('click', () => {
  console.log("rererererere")
  const apiKey = '8268a916c3cb4c81b3d185255232704';
  const city = 'London';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the weather data
    })
    .catch(error => console.error(error));
});

});