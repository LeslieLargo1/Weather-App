
import { futureforecast } from "./futureforecast.js";
export const displayData =(weatherData)=>{
  
  const temp = weatherData.list['0'].main.temp      /* here i have to find&save the temp in the api*/ 
  const gettemp=document.querySelector('.temp')     /* here i have to find&save the temp in the html*/ 
  gettemp.textContent= Math.ceil(temp) +'°c'        /* here i have to merge the html & api */ 

  const humidity = weatherData.list['0'].main.humidity
  const gethumidity =document.querySelector('.humidity')
  gethumidity.textContent=humidity+' %'

  const windSpeed = weatherData.list['0'].wind.speed
  const getwindSpeed = document.querySelector('.wind')
  getwindSpeed.textContent = windSpeed 

 
  const weatherIcon = weatherData.list['0'].weather['0'].icon
  const getWeatherIcon = document.querySelector('.weather-icon')
  getWeatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)

  const city = weatherData.city.name
  const getcity = document.querySelector('.city')
  getcity.textContent=city


  const description = weatherData.list['0'].weather['0'].description;
const getdescription = document.querySelector('.description');
const capitalizedDescription = description.replace(/\b\w/g, (match) => match.toUpperCase());
getdescription.textContent = capitalizedDescription;
  

 futureforecast(weatherData)

};

