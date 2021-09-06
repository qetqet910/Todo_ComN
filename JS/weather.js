
const API_KEY = 'e22a1d3fc6a68f3c97d66bac694d31b5';

const Weather = document.querySelector('.weather');

const temp = Weather.querySelector('.temp');
const temp1 = temp.querySelectorAll('p')[0];
const temp2 = temp.querySelectorAll('p')[1];
const temp3 = temp.querySelectorAll('p')[2];

const Country = Weather.querySelector('.country');
const weather_condition = Weather.querySelector('.weather_condition');

function onTruePos(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url)
    .then((Resource) => Resource.json())
    .then((data) => {
        const Temp = data.main.temp;
        const MaxTemp = data.main.temp_max
        const MinTemp = data.main.temp_min
        const country  = data.sys.country
        const weather = data.weather[0].main;

        temp1.innerText = `기온 : ${Temp.toFixed(1)}`;
        temp2.innerText = `최고 기온 : ${MaxTemp.toFixed(1)}`;
        temp3.innerText = `최저 기온 : ${MinTemp.toFixed(1)}`;

        Country.innerText = `나라 : ${country}`;
        weather_condition.innerText = `날씨 : ${weather}`;
    })
}

function onFalsePos(Error){
    alert(`사용자의 위치 정보를 가져올 수 없습니다 ${Error}`);
}

const WeatherApiOption = {
    enableHighAccuracy: 'true',
    timeout: 1000,
    maximumAge: 0
}

navigator.geolocation.getCurrentPosition(onTruePos, onFalsePos, WeatherApiOption);