const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "93a27a8445a8818b4946a9572d8ab4b1";

async function checkWeather (city){
     const response = await fetch(url + city + `&appid=${api_key}`);
     if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

     }else{let data = await response.json();
     console.log(data);
     document.querySelector(".city").innerText = data.name;
     document.querySelector(".temp").innerText = Math.floor(data.main.temp) +" "+"°C";
     document.querySelector(".humidity").innerText = data.main.humidity + "%";
     document.querySelector(".wind").innerText = data.wind.speed +" "+"km/h";
     let weatherIcon=document.querySelector(".weather-icon");
     if(data.weather[0].main="Clouds"){
        weatherIcon.setAttribute("src","img/clouds.png")
     }else if(data.weather[0].main = "Clear"){
        weatherIcon.setAttribute("src","img/clear.png")
     }else if(data.weather[0].main = "Rain"){
        weatherIcon.setAttribute("src","img/rain.png")
     }else if(data.weather[0].main = "Drizzle"){
        weatherIcon.setAttribute("src","img/drizzle.png")
     }else if(data.weather[0].main = "Mist"){
        weatherIcon.setAttribute("src","img/mist.png")
     }
     document.querySelector(".weather").style.display= "block";
     document.querySelector(".error").style.display= "none";

    }
     
     
}

let searchbox = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
});
