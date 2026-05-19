// localStorage - bu brauzerni 5-10 mb hajmda xotira beradigan joy. saxifani ma'lumotlarni o'zida saqlab turadi agar sahifaga yana kirsangiz ma'lumotlar saqlanb qoladi refresh bersangiz ham.

//LocalStorage

const names = JSON.parse(localStorage.getItem("names")) || []; // agar localStorage da names degan ma'lumot bo'lsa uni olish uchun JSON.parse() metodidan foydalanamiz. agar names degan ma'lumot bo'lmasa bo'sh array qaytaradi.

if (names.length > 0) {
    names.forEach(name => {
        console.log(name);
})
} else {
    console.log("Hech qanday ism yo'q")
}





//setItem
// localStorage.setItem("name", "Ahror")
// const names = ["Ahrror", "Sardor", "Shoxrux", "Doston"]
// localStorage.setItem("names", JSON.stringify(names)) //arrayni stringga aylantirib saqlash uchun JSON.stringify() metodidan foydalanamiz.

//getItem
// const name = localStorage.getItem("age")
// console.log(getage);

// const getnames = JSON.parse(localStorage.getItem("names")) //stringni arrayga aylantirib olish uchun JSON.parse() metodidan foydalanamiz.
// console.log(getnames);


//ma'lumotlarni tozalash
// localStorage.clear()