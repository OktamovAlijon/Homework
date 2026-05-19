const signupForm = document.querySelector('#signup-form')

const message = document.querySelector('.message')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const regEX = /^[a-zA-Z0-9]{6,12}$/
  const inputVal = signupForm.username.value

  if (regEX.test(inputVal)) {
    message.textContent = "to'gri malumot kiritildi"
  } else {
    message.textContent = "kritilgan malumot 6 dan 12 gacha son oraligida bo'lishi kere"
  }
})

//live fedback
signupForm.username.addEventListener('keyup', (e) => {
    if (regEX.test(e.target.value)) {
        signupForm.username.setAttribute('class', 'success')
    } else {
        signupForm.username.setAttribute('class', 'error')
    }
})