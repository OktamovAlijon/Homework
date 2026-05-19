const getData = async (resurse) => {
const request = await fetch(resurse)
const data = await request.json()
return data
}

getData(API)
.then( (data) => {
console. log(data)
})
.catch((err)=>{
console.log(err)
})

console.
console.log(4)
console.log(3);

console.log(4);
