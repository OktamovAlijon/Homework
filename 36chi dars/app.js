//for each
const ismlar = ['alijon', 'asror', 'ibirohim', 'islom']
const yangipersons = []

ismlar.forEach(function (ism) {
  const newIsm = ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
  yangipersons.push(newIsm)
})

console.log(yangipersons)
