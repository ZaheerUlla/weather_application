let apikey="d6bd1a050fc3f2f9323cd2fd7e09705e"

let cityInput=document.querySelector("#city-input");

let city=document.querySelector(".city");

let temp=document.querySelector(".temp");

let country=document.querySelector(".country");

let wind=document.querySelector(".wind");

let humdity=document.querySelector(".humidity");

cityInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let cityName = cityInput.value.trim();
    if (cityName) {
cityInput.value=""
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
  .then(function (response) {
    // handle success
    temp.innerHTML=`<STRONG>Temperature<STRONG>:    ${(response.data.main.temp- 273.15).toFixed(1)}&degC`;
    city.innerHTML=response.data.name;
    country.innerHTML="<strong>COUNTRY</strong>: <br>"+response.data.sys.country
    wind.innerHTML =`<strong>Wind Speed</strong>: <br>${response.data.wind.speed}`;
    humdity.innerHTML="<strong>Humidity</strong>:<br>" +response.data.main.humidity;

  }) 
  .catch(function (error) {
    // handle error
    console.log(error);
  })


    }}})