const user = {
  name: 'Alijon',
  age: 23,
  email: 'alijonoktamov96@gmail.com',
  location: "jizzax",
  langs: ['uzbek', 'russian', 'english'],
  login: function () {
    console.log('Siz kirdingiz.')
  },
  logout: function () {
    console.log('Siz chidingiz.')
  },
  speak: function () {
    console.log(this)
    console.log('I can speak:')
    this.langs.forEach((lang) => {
      console.log(lang)
    })
  },
}

user.speak()
