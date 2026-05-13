const ikki = document.querySelectorAll('p')

ikki.forEach((text) => {
  if (text.textContent.includes('success')) {
    text.classList.add('success')
  }

  if (text.textContent.includes('error')) {
    text.classList.add('error')
  }
})

const heading = document.querySelector('h1')

heading.classList.toggle('success')
heading.classList.toggle('success')
