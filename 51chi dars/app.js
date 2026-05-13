const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
const li = document.createElement('li')
li.textContent = 'Something new text'
ul.appendChild(li)
})

const items = document.querySelectorAll('li')

items.forEach((item) => {
item.addEventListener('click', (e) => {
console.log('CLICKED LI')

})
})

ul.addEventListener('click', (e) => {
if (e.target.nodeName == 'LI') {
e.target.remove()
}
})
