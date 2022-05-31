const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const quesionsA = prompt("Один из просмотренных фильмов?"),
      quesionsB = prompt("Насколько вы оцените его?"),
      quesionsC = prompt("Один из просмотренных фильмов?"),
      quesionsD = prompt("Насколько вы оцените его?");

personalMovieDB.movies[quesionsA] = quesionsB;
personalMovieDB.movies[quesionsC] = quesionsD;

console.log(personalMovieDB);