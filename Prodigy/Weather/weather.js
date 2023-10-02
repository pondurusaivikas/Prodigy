// JavaScript for fetching weather data from an API
function getWeather() {
    const locationInput = document.getElementById("locationInput").value;
    const apiKey = "fa2df5184bd5de56260b0c0ed7300a4c"; // Replace with your actual API key

    if (locationInput.trim() === "") {
        alert("Please enter a location.");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa2df5184bd5de56260b0c0ed7300a4c
    `)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Error: Location not found. Please enter a valid location.");
            } else {
                const weatherInfo = `
                    <p>Location: ${data.location.name}, ${data.location.country}</p>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Condition: ${data.current.condition.text}</p>
                    <p>Humidity: ${data.current.humidity}%</p>
                `;
                document.getElementById("weather-info").innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            alert("An error occurred while fetching weather data.");
            console.error(error);
        });
}
