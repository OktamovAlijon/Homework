const names = ['ali', 'islom', 'ibirohim', 'elbek', 'shodi']
const namesNew = []

names.forEach(function (name, i) {
  let boshi = name.charAt(0).toUpperCase()
  let davomi = name.slice(1).toLowerCase()
  let fullname = boshi + davomi + 'bek'
  namesNew.push(fullname, i)
})

console.log(namesNew)
