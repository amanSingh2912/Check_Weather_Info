const apiKey = "1a53d68e3f1883936eb374870e2e02f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        document.querySelector(".error").style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/hr";
        document.querySelector(".weather-type").innerHTML = data.weather[0].main;

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else {
            weatherIcon.src = ""
        }
        document.querySelector(".weather").style.display = "block"
    }
}

searchBtn.addEventListener("click", () => {
   searchBtn.style.ba
    checkWeather(searchBox.value);
    searchBox.value = "";
})