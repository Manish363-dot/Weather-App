const apikey = "282c3040abed39ab4e239288f19e8af9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const serachBox = document.querySelector(".search input")
const serachbtn = document.querySelector(".search .symbol")
const weathericon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp)+ "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png";
    }
       else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }

document.querySelector(".weather").style.display = "block"
 document.querySelector(".error").style.display = "none";
console.log(data)
    }
    
}

serachBox .addEventListener("keyup", (event)=>{
    if(event.key == "Enter"){
        checkWeather(serachBox.value);
    }
});

serachbtn.addEventListener("click", ()=>{
    checkWeather(serachBox.value);
})