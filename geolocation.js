const span_weather = document.querySelector(".message-weather")
const position = navigator.geolocation.getCurrentPosition(success, error);

async function request(location) {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=48b388aa4e0b4192b27202932201806&q=${location}&days=1`
    console.log(url)
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        let name = json.location.name
        let province = json.location.region + ' Province'
        let country = json.location.country
        let temperature = json.forecast.forecastday[0].day.avgtemp_c
        let weather = json.forecast.forecastday[0].day.condition.text
        let location = `${name}, ${province}, ${country}`
        console.log(`Today's Forecast for ${location}: ${temperature}, ${weather}`)
        showforecast(location, temperature, weather)
    } else {
        span_weather.textContent = "Sorry, we can't access to your location"
    }

}
function success(position) {
    console.log(position)
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let location = `${latitude},${longitude}`
    request(location)
}
function error() {
    span_weather.textContent = "Sorry, we can't access to your location"
}

function showforecast(location, temperature, weather) {
    span_weather.textContent = `Today's Forecast for ${location}: ${temperature}°, ${weather}`
}