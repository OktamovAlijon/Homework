
const GetTodos = (callback) => {

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', ()=> {
// console. Log(request, request.readyState)
if (request.readyState === 4) {
callback(undefined, request.responseText)
} else if (request.readyState === 4) {
    callback("ma'lumotlarni olishda xatolik yuz berdi", undefined)
}
}) 

// open
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

// send
request.send()

}

GetTodos((err, data) => {
console.log(err, data)
})