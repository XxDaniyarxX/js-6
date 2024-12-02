const apiKey = "&appid=6511e14723ad8cb6f243ece1366c5deb";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const parent = document.querySelector('.card-texts')
const h2El = parent.querySelector('h2')
const h5El = parent.querySelector('h5')
const allP = parent.querySelectorAll('p')// [p,p,p] -> 0,1,2
const pStatus = allP[0]
const pWind = allP[1]
const pHumydity = allP[2]

const input = document.querySelector('input[type="text"]')
const inputBtn = document.querySelector('input[type="button"]')

inputBtn.addEventListener('click', async () => {
    const cityName = input.value
    const url = baseURL + cityName + apiKey
    const res = await fetch(url)
    const cityData = await res.json()
    console.log(cityData);
    input.value = ''
    showInfo(cityData)
})

function showInfo(city) {
    h2El.innerHTML = city.name + `<span> ${city.sys.country} </span>`
    h5El.innerHTML = (city.main.temp -273.1).toFixed() + `°C`
    pStatus.innerHTML = city.weather[0].description
    pWind.innerHTML = `<span>ветер ${city.wind.speed}км/ч</span>`
    pHumydity.innerHTML =  `<span>влажность ${city.wind.deg}%</span>`
}


