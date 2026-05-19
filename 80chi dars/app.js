getTodos('./todos/ahror.json')
.then((data) => {
console. log(data)
return getTodos('./todos/doniyor.json')
})
.then((data) => {
console. log(data)
return getTodos('./todos/sardor.json')
})
.then((data) => {
console.log(data)
})
.catch((err) => {
console.log(err)
})
