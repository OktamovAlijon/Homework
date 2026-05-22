const movies = [
    { name: 'avatar 3D', year: 2008, rating: 7.8 },
    { name: 'titanik', year: 1997, rating: 7.8 },
    { name: 'avengers', year: 2012, rating: 8.1 },
    { name: 'avengers endgame', year: 2019, rating: 8.4 },
    { name: 'avengers infinity war', year: 2018, rating: 8.5 },
]

const kinoolar = movies.filter((movie) => {
    return movie.year > 2010;
});

console.log(kinolar);

//forEach
// const newMovies = [];
// movies.forEach(movie => {
//     if (movie.year > 2010) {
//         newMovies.push(movie);
//     }
// });

// console.log(newMovies);


