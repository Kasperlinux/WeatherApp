const timeEl =document.getElementById('time');
const dateEl  =document.getElementById('date');
const currentWeatherItemsEl=document.getElementById('current_weather_items');
const timezone=document.getElementById('time_zone');
const countryEl=document.getElementById('country');
const weatherForecastEl=document.getElementById('weather_forecast');
const currentTempEl=document.getElementById('current_temp');

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY="ba8b9123ebc00999afb35ca0e753cf3d";

setInterval(() => {
    const time = new Date();
    const month =time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormate= hour>=13 ? hour %12 : hour
    const minutes=time.getMinutes();
    const ampm= hour>= 12 ? 'PM' : 'AM';

    timeEl.innerHTML= hoursIn12HrFormate+':'+minutes+`<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML= days[day]+', '+date+' '+months[month]
},1000);
 getWeatherData();
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success)=>{

        let {latitude,longitude}=success.coords;

        // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`).then(res=> res.json()).then(data=>{
        //     console.log(data);
        // })
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
        `).then(res=> res.json()).then(data=>{
            console.log(data);
        })
    })
}