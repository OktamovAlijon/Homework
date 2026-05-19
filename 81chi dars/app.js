// api
const API = 'https://randomuser.me/api/?results=9'

// for Leader
const overlay = document.getElementById('overlay')

// request promise

//Complexity is 10 It's time to do something ...
const getData = (resource) => {
//Complexity is 8 It's time to do something ...
return new Promise((resolve, reject) => {
const request = new XMLHttpRequest()

//Complexity is 7 It's time to do something ...
request.addEventListener('readystatechange', () => {
if (request.readyState < 4) {
console. log('Loading ... ')
} else if (request.readyState == 4 && request. status == 200) {
console. log(request. statusText)
} else if (request.request == 4) {
console. log('error')
}
})

request.open('GET', resource)
request.send()
})
}