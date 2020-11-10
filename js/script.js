/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;

let personalMovieDB = {
  count: start(),
  movies: rememberMyFilms(),
  actors: {},
  genres: writeYourGenres(),
  privat: true,
};


detectPersonalLevel();
showMyDB(toggleVisibleMyDB(personalMovieDB.privat));



function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return +numberOfFilms;
}

function rememberMyFilms() {
  let movies = {};
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b!= null && a != '' && b != '' && a.length < 30) {
      movies[a] = b;
      console.log('done question of Films');
    } else {
      console.log('error question of Films');
      i--;
    }
  }
  return movies;
}

function detectPersonalLevel() {
  if (numberOfFilms > 0 && numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов!');
  } else if (10 <= numberOfFilms && numberOfFilms <= 30) {
    console.log('Вы классический зритель!');
  } else if (numberOfFilms > 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка!');
  }
}

function showMyDB(hidden) {
  
  if (!hidden) {
    console.log('personalMovieDB:', personalMovieDB);
  }
}

function toggleVisibleMyDB(value) {
    
  if (value === false) {
    value = true;
    console.log('value: ', value);
  } else {
    value = false;
    console.log('value: ', value);
  } 
  return value;
  

}


function writeYourGenres() {
  let genres = [];
  for (let i = 1; i <= 3; i++) {
      const j = prompt(`Ваш любимый жанр под номером ${i}`);
    if (j != null && j != '' ) {
      genres[i - 1] = j;
      console.log('done question of genres');
    } else {
      console.log('error question of genres');
      i--;
    }
    
  }
  genres.forEach(function(p, i, genres) {
    console.log(`Любимый жанр #${i+1} - это ${p}`);
  });
  return genres;
}
