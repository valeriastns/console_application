

let personalMovieDB = {
    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
    start: function () {
        personalMovieDB.count = +prompt('How many movies have you ever watched?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you ever watched?');
        }
    },
    rememberMyfilms: function () {
        if (personalMovieDB.count < 10) {
            console.log('You watched not a lot!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('You are classic movie-watcher!');
        } else if (personalMovieDB.count > 30) {
            console.log('You are a true movie lover!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    detectPersonallevel: function () {
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
    },
    showMyDB: function () {
        if (personalMovieDB.privat != true) {
            console.log(personalMovieDB);
        } else {
            console.log('The information is privat!')
        }
    },
    toggleVisibleDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre ${i}`);
            if (genre === null || genre === '') {
                console.log('Please fill the field properly and do not let it empty');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i + 1} is ${item}`)
        });
    },
};


