const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')
  li.textContent = 'yangi text'
  ul.appendChild(li)
})

const items = document.querySelectorAll('li')
ul.addEventListener('click', (e) => {
  if (e.target.nodeName == 'LI') {
    e.target.remove()
  }
})
