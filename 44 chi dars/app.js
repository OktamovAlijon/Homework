/*--------------- lesson-44 ------------*/

// textContent
// const title = document.getElementById('title')
// title.textContent += ' New Text'

// const listItem = document.querySelectorAll('.list-item')

// listItem.forEach((item) => {
//   item.textContent += ' darslar'
// })

// innerHTML
const names = ['ali', 'asror', 'ibirohim']

const ol = document.querySelector('ol')

names.forEach((name) => {
  ol.innerHTML += `<li>${name}</li>`
})
