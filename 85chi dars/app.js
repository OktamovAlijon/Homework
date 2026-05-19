const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
constIdetails = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')

// update ui
const updateUI = (weather) => {

}

// get weather
const getWeather = async (city) => {
const data = await getData(city)
return data

}

// get Location
changeLocation.addEventListener('submit', (e) => {
e.preventDefault()
const cityName = changeLocation.city.value.trim()
changeLocation.reset()
getWeather(cityName) .then((data) => updateUI(data))
})