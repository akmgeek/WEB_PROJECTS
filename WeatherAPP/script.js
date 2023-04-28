document.addEventListener('DOMContentLoaded', () => {

  const apiKey = '8268a916c3cb4c81b3d185255232704';

  function getWeatherData(latitude, longitude) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const current_temp_c = data.current.temp_c;
        const current_condition = data.current.condition.text;
        const current_humidity = data.current.humidity;
        const current_temp_f = data.current.temp_f;

        const location_country = data.location.country;
        const location_region = data.location.region;
        const location_name = data.location.name;

        document.getElementById("city-name").innerHTML = location_name;
        document.getElementById("country-name").innerHTML = location_country;
        document.getElementById("current-temp").innerHTML = `${current_temp_c}°C (${current_temp_f}°F)`;
        document.getElementById("condition-text").innerHTML = current_condition;
      })
      .catch(error => console.error(error));
  }

  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeatherData(latitude, longitude);
  });

});
