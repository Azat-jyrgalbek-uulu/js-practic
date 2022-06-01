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


if (4 == 9) {
    console.log("ok!")
}else{
    console.log('fuck you!!!')
};

(4 == 9) ? console.log('good job');


console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}




