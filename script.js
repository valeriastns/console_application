let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you ever watched?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you ever watched?');
    }
}
start();

let personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
};

if (personalMovieDB.count < 10) {
        console.log('You watched not a lot!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('You are classic movie-watcher!');
} else if (personalMovieDB.count > 30){
        console.log('You are a true movie lover!');
} else {
    console.log ('Произошла ошибка');
}


for (let i = 0; i < 2; i++) {
    let a = prompt('What was the last watched movie?'),
    b = prompt('How did you rate it?');
    if (a != '' && b != '' && a.length < 50 && a != null && b != null) {
        personalMovieDB.movies[a] = b;
        console.log('ok');
    } else {
        console.log('error');
        i--
    }
}

console.log(personalMovieDB);
