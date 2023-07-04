// export const futureforecast = (futureWeather) => {

//     // const futureIcon = futureWeather.list['0'].weather['0'].icon    /* here i have to find&save the temp in the api*/
//     // /* here i have to find&save the temp in the html*/
//     // /* here i have to merge the html & api */

//     // const futureDescription = futureWeather.list['0'].weather['0'].description
//     // const futureMax = futureWeather.list['0'].main.temp_max
//     // const futureMin = futureWeather.list['0'].main.temp_min
//     // const futureforecastContainer = document.createElement('div')
//     // const upcomingDays = document.createElement('div')
//     // futureforecastContainer.append(upcomingDays)
//     // const day = document.createElement('div')
//     // const futureIcons = document.createElement('div')
//     // const image = document.createElement('img')
//     // image.setAttribute('src', `https://openweathermap.org/img/wn/${futureIcon}@2x.png`)
//     // futureIcons.append(image)
//     // const futureDes = document.createElement('div')
//     // futureDes.textContent = futureDescription
//     // const max = document.createElement('div')
//     // max.textContent = Math.ceil(futureMax) + '°c'
//     // const min = document.createElement('div')
//     // min.textContent = Math.floor(futureMin) + '°c'
//     // const maxMin = document.createElement('div')
//     // maxMin.append(max, min)
//     // upcomingDays.append(day, futureIcons, futureDes, maxMin)
//     // const container = document.querySelector('.container')
//     // container.appendChild(upcomingDays)
//     // Object.assign(upcomingDays.style, {
//     //     width:'15%',
//     //     height:'350px',
//     //     display:'flex',
//     //     backgroundColor:'#2f4f9052',
//     //     flexDirection:'column',
//     //     alignItems:'center',
//     //     borderRadius:'15px',
//     //     marginLeft:'110px',

//     // })
   

// const row = document.querySelector('.cards')

// row.innerHTML = futureWeather.list
// .map((day, idx) =>{
//     if( idx <=6){
//         let dt = new Date(day.dt * 1000)
//         return `<div class="upcomingDays">
//         <div class="day">${dt.toDateString()}</div>
//         <div class="futureIcons">
//             <img alt="rain-icon" class="futureIcon" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
//         </div>
//         <div class="futureDescription">${day.weather[0].description}</div>
//         <div class="max-min">
//             <div class="max">${Math.ceil(day.main.temp_max) +'°C max'}</div>
//             <div class="min">${Math.floor(day.main.temp_min) +'°C min '}</div>
//         </div>
        
        
//         </div>`
//     }
   
// }).join('');
 
// // to view api weather data
// console.log(futureWeather) 
// // console.log(row.innerHTML)
// }

// // icon , description , max-MIDIInput, 

export const futureforecast = (futureWeather) => {
    const row = document.querySelector('.cards');
    
    // Group weather data by day
    const groupedByDay = futureWeather.list.reduce((result, day) => {
      const date = new Date(day.dt * 1000).toLocaleDateString();
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(day);
      return result;
    }, {});
    
    row.innerHTML = Object.entries(groupedByDay)
      .map(([date, weatherList]) => {
        const day = weatherList[0];
        return `<div class="upcomingDays">
          <div class="day">${new Date(day.dt * 1000).toDateString()}</div>
          <div class="futureIcons">
            <img alt="rain-icon" class="futureIcon" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
          </div>
          <div class="futureDescription">${day.weather[0].description}</div>
          <div class="max-min">
            <div class="max">${Math.ceil(day.main.temp_max) + '°C max'}</div>
            <div class="min">${Math.floor(day.main.temp_min) + '°C min'}</div>
          </div>
        </div>`;
      })
      .join('');
  
    // Log the API weather data for debugging
    console.log(futureWeather);
  };
  