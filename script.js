let numbersOfFilm = prompt('How many movies have you ever watched?');


let personalMovieDB = {
    'count': numbersOfFilm,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
};

let a = prompt('What was the last watched movie?'),
    b = prompt('How did you rate it?'),
    c = prompt('What was the last watched movie?'),
    d = prompt('How did you rate it?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
