const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(signupForm.username.value)
})

const ism = 'Ahrorbek12399'
const regEX = /^[a-zA-Z0-9]{6,}$/

const result = regEX.test(ism)
console.log(result)
