async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=YOUR_API_KEY&units=metric');
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('current-weather');
    weatherDiv.innerHTML = `
        <p>${data.weather[0].main} (${data.weather[0].description})</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
    `;
}

fetchWeather();
