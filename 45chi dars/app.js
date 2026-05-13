/*--------------- lesson-45 ------------*/
const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://t.me/TheMvcDev')
link.textContent = 'go telegram my profile'

const text = document.querySelector('p')
console.log(text.getAttribute('class'))
text.setAttribute('class', 'success')

text.setAttribute('style', 'color: red')
