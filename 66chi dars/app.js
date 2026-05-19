//Destructing

const mevalar = ["olma", "anor", "behi", "shaftoli", "o'rik"];

const olam = mevalar[0];
const anor = mevalar[1];
const behi = mevalar[2];
const shaftoli = mevalar[3];
const orik = mevalar[4];
console.log(olam, anor, behi, shaftoli, orik);

//destructing usuli

const [olma, anor1, behi1, ...boshqalar] = mevalar;

console.log(olma, anor1, behi1, boshqalar);
