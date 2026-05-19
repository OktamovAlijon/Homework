//setTimeout  - bu biroz kutib o'sha funksiyani ishlatadi

setTimeout (function, time)

function callme() {
    alert("Salom dunyo !")
}

setTimeout(callme, 1000)


//setInterval = bu esa har voqtda biron bir funksiyani ishlatib turadi


// let a = 0

// setInterval(() => {
//     a++
//     console.log(a)
// }, 1000)



let a = 0
const timerinterval = setInterval(() => {
    a++;
    console.log(a);
}, 1000)

setTimeout(() => {
    clearInterval(timerinterval);
}, 5000);