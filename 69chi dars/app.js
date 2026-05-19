//shalow copy - sayoz nusxalash
//deep copy - chuqur nusxalash

//Primitive

let a = 2;
let b = a;
b = 7;

console.log('a:', a);
console.log('b:', b);


//reference
const persion = {
    name: "John",
    age: 30,
    city: "New York"
}

const newperson = {...person }

const newperson = "doni"
newperson.age = 25
newperson.city = "Toshkent"

console.log('person:', person);
console.log('newperson:', newperson);

const [a, ...qolgani] = [1, 2, 3]

console.log(qolgani);
