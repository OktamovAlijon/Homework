// const API = 'https://restcountries.com/v3.1/all'
// // old => new XMLHttpRequest()
// //Complexity is 8 It's time to do something ...
// const getData = (resource) => {
//     //Complexity is 6 It's time to do something ...
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         //Complexity is 5 Everything is cool!
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState == 4 && request.status == 200) {
//                 console.log(request.responseText) |
// } else if (request.readyState == 4) {
//                 console.log('Error !')
// }
//         })
//                 request.open('GET', resource)
//                 request.send()

//             })

//     }

//     //fetch 
//     fetch(API)
// .then((data) => {
// return data.json()
// })
// .then( (dataJson) => {
// console.log(dataJson)

// .catch((err) => {
// console.log(err)
// })

// })