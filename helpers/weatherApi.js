

const api = {
    key:"843795bbd1706de5dcdefe13c777f815",
    baseUrl:"https://api.openweathermap.org/data/2.5/"
}

function getResult(searchText) {
  return (
    fetch(
    `${api.baseUrl}weather?q=${searchText}&units=metric&appid=${api.key}`
  )
    .then((weather) => weather.json())
    .then((result) => result));
  
}


export { getResult as GetWeather }

/*https://api.openweathermap.org/data/2.5/
weather
?q=istanbul
&units=metric
&appid=843795bbd1706de5dcdefe13c777f815
*/

// const searchBox=document.querySelector('.search-box');
// searchBox.addEventListener('keypress',callbackFunction);

// function callbackFunction(event) {
//     if(event.keyCode===13) {
//      console.log("Pressed entered...");
//       getResult(searchBox.value);
//     }
// }


// function displayResult(weather) {
//     console.log(weather)
//   let city=document.querySelector('.city');
//   city.innerText=`${weather.name} , ${weather.sys.country}`;

//   let temp=document.querySelector('.temperature');
//   temp.innerText=`${Math.round(weather.main.temp)} °C`;

//   let now=new Date();
//   let dateNow=document.querySelector('.date');
//   dateNow.innerText=now;
// }