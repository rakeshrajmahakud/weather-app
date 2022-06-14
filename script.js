let city = document.querySelector('#cityName');
let mainImg = document.querySelector('#mainLogo');
let temp = document.querySelector('#temp');
let main = document.querySelector('#main');
let desc = document.querySelector('#description');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity');
let pressure = document.querySelector('#pressure');
let img = document.createElement('img');
let search = document.querySelector('#search');
let display = document.querySelector('.child-display');


// fetching the api request
function weatherData(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba73afc5e719ded46f04d35ce014c003&units=metric`)
    .then((res)=>  res.json()).then(response=> response);
}


async function myWeather(citydata) {
    let data = await weatherData(citydata);

    display.style.background = randomImage();
    display.style.backgroundSize ='cover'
    
    city.innerHTML = `<span class="material-icons location-icon">place</span>`+data.name;
    let img = document.createElement('img');
    img.className = "main-img"

    let logo = data.weather[0].icon;
    // img.src = `https://openweathermap.org/img/wn/${logo}@2x.png`
    // img.src = './3d weather icons/cloud/17.png'
 
    img.src = chooseCloud(logo);
    mainImg.innerHTML = "";
    mainImg.append(img);

    temp.innerHTML = data.main.temp+`<i class="ri-celsius-line celsius"></i>`;
    main.innerHTML = data.weather[0].main;
    desc.innerHTML = data.weather[0].description;

    wind.innerHTML =`<span class="material-icons buttom-icon">air</span><br>${data.wind.speed}km/hr<br>Wind`;
    humidity.innerHTML =`<span class="material-icons buttom-icon">water_drop</span><br>${data.main.humidity}%<br>Humidity`;
    pressure.innerHTML =`<span class="material-icons buttom-icon
    ">speed</span><br>${data.main.pressure}hPa<br>Pressure`;


}

myWeather('Bhubaneswar');

// this function used for search block 

search.addEventListener('click',()=>{
    let searchCity = document.querySelector('#searchCity');
    myWeather(searchCity.value);
    searchCity.value = "";
})

// this function select a random background image 
function randomImage() {
    let arr = ['url("./illustration backgrounds/1.png")',
                'url("./illustration backgrounds/2.gif")',
                'url("./illustration backgrounds/3.jpg")',
                'url("./illustration backgrounds/4.gif")',
                'url("./illustration backgrounds/5.gif")',
                'url("./illustration backgrounds/6.png")',
                'url("./illustration backgrounds/7.gif")',
                'url("./illustration backgrounds/8.png")',
                'url("./illustration backgrounds/9.gif")',
                'url("./illustration backgrounds/10.gif")',
                'url("./illustration backgrounds/11.png")',
                'url("./illustration backgrounds/12.gif")',
                'url("./illustration backgrounds/13.gif")',
                'url("./illustration backgrounds/14.gif")',
                'url("./illustration backgrounds/15.gif")',
                'url("./illustration backgrounds/16.jpg")',
                'url("./illustration backgrounds/17.gif")',
                'url("./illustration backgrounds/18.jpg")',
                'url("./illustration backgrounds/19.gif")'
            ];

    let x = Math.trunc(Math.random() * (20 - 1) + 1);
    return arr[x];
}


function chooseCloud(key) {
    switch (key) {
        case '01d':
            return './3d weather icons/day/clear01D.webp';

        case '01n':
            return './3d weather icons/night/clear01N.webp';

        case '02d':
            return './3d weather icons/day/fewclouds02D.webp';

        case '02n':
            return './3d weather icons/night/fewclouds02N.webp';

        case '03d':
             return './3d weather icons/day/scatteredcloud03D.webp';

        case '03n':
            return './3d weather icons/night/scatteredcloud03N.webp';
            
        case '04d':
            
            return './3d weather icons/day/brokencloud04D.webp';

        case '04n':
            return './3d weather icons/night/brokencloud04N.webp';

        case '09d':
            return './3d weather icons/day/showerrain09D.webp';

        case '09n':
            return './3d weather icons/night/showerrain09N.webp';

        case '10d':
            return './3d weather icons/day/rain10D.webp';

        case '10n':
            return './3d weather icons/night/rain10N.webp';

        case '11d':
            return './3d weather icons/day/thunderstorm11D.webp';

        case '11n':
            return './3d weather icons/night/thunderstorm11N.webp';
          
        case '13d':
            return './3d weather icons/day/snow13D.webp';

        case '13n':
            return './3d weather icons/night/snow13N.webp';

        case '50d':
            return './3d weather icons/day/mist50D.webp';

        case '50n':
            return "./3d weather icons/night/mist50N.webp";
                
    }
}

// console.log(chooseCloud('50d'));






