/*
    #Getting weather information by using openweathermap API's current weather data collection
*/

// Variable
const API_KEY = "3d8162a3210f2c09bb03fa1e81c083a4";

// Function for success on geological location information gathering approval
function onGeolocationSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    //I could only understand the next code is for calling openweathermap API. I know nothing about fetch, promises, then yet.
    fetch(url).then(response => response.json()).then(data =>{

        const weatherInfo = document.querySelector("#weather span:nth-child(1)");
        const cityInfo = document.querySelector("#weather span:nth-child(2)");
        const degreeInfo = document.querySelector("#weather span:nth-child(3)");
        const humidityInfo = document.querySelector("#weather span:nth-child(4)");

        //Display an icon depends on current weather
        weatherInfo.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />`; 
        //Getting current city name
        cityInfo.innerText = data.name;
        //Getting current degree in Kal
        const kalDegree = data.main.temp;
        //Calculating in Cel
        const celDegree = (kalDegree * 9 / 5) - 459.67;
        degreeInfo.innerText = `${Math.floor(celDegree)}°F`;
        //Getting humidity info
        humidityInfo.innerText = `Humidity ${data.main.humidity}%`;
    })
}

// Function for declined gathering information
function onGeolocationFail(){
    alert("Geological location access required: this webpage collect the information only to generate weather information.");
}


navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationFail);