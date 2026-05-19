//array map method
const movies = [
    { name: 'avatar 3D', year: 2008, rating: 7.8 },
    { name: 'titanic', year: 1997, rating: 7.8 },
    { name: 'avengers', year: 2012, rating: 8.1 },
    { name: 'avengers endgame', year: 2019, rating: 8.4 },
    { name: 'avengers infinity war', year: 2018, rating: 8.5 },
]




// const members = [2, 3, 4, 5]
// let newnumber;
// members.forEach ((element) => {
//     newnumber = element ** 2;
// });

// console.log(newnumber);


const mapnumbers = numbers.map((number) => number ** 2);
console.log(mapnumbers);

const mapMovies = movies.map((movie) => {
return {name : movie.name, rating: movie.rating}
});

console.log(mapMovies);
console.log(movies);
