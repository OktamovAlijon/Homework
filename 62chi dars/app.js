const movies = [
    { name: 'avatar 3D', year: 2008, rating: 7.8 },
    { name: 'titanic', year: 1997, rating: 7.8 },   
    { name: 'avengers', year: 2012, rating: 8.1 },
    { name: 'avengers endgame', year: 2019, rating: 8.4 },
]

//alphabetically sort
const sortedMovies = movies.sort((a, b) => a.name.localeCompare(b.name));

//numbers
const numbers = [3, 1, 5, 7, 8]

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const sortNumbers = movies.sort((a, b) => a.year - b.year);
console.log(sortNumbers);
