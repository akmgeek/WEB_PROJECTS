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
  const city = 'Noida';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
        const current_temp_c = data.current.temp_c;
        const current_condition = data.current.condition;
        const current_humidity = data.current.temp_c;
        const current_temp_f = data.current.temp_c;

        const location_country = data.location.country;
        const locattion_region = data.location.region;
        const location_name = data.location.name;
        // const location = data.location.name
        // const location = data.location.name
        // const location = data.location.name
        // const location = data.location.name
        // console.log(current)
        // console.log(current_condition.text)

        document.getElementById("city-name").innerHTML = location_name;
        document.getElementById("country-name").innerHTML = location_country;
        document.getElementById("current-temp").innerHTML = current_temp_c;
        document.getElementById("condition-text").innerHTML = current_condition.text;
 
      // Do something with the weather data
    })
    .catch(error => console.error(error));
});

});