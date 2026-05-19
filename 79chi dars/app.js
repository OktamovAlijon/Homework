//Promise

const internet = true;

const getData = () => {
    return new Promise((Resolve, Reject) => {
        if (internet) {
            Resolve('internet mavjud')
        } else {
            Reject('internet mavjud emas')
        }
    })
}

getData().then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})