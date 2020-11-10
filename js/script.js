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

let personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
      start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
          personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
      },
      rememberMyFilms: function() {

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
      
        if (a != null && b!= null && a != '' && b != '' && a.length < 30) {
            personalMovieDB.movies[a] = b;
            console.log('done a question of Films');
        } else {
            console.log('error a question of Films');
            i--;
        }
        }
      },
      detectPersonalLevel: function() {

        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
          console.log('Просмотрено довольно мало фильмов!');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
          console.log('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
          console.log('Вы киноман!');
        } else {
          console.log('Произошла ошибка!');
        }
      },
      showMyDB: function(hidden) {
  
        if (!hidden) {
          console.log('personalMovieDB:', personalMovieDB);
        }
      },
      toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
        } else {
          personalMovieDB.privat = true;
        }
      },
      // writeYourGenres: function() {

      //   for (let i = 1; i <= 3; i++) {
      //     personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
      //   }
      // },
      writeYourGenres: function() {

        for (let i = 1; i < 2; i++) {

          // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

          // if (genre === null || genre === '' ) {
          //   console.log('Вы ввели некорректные данные или не ввели их вовсе');
          //   i--;
          // } else {
          //   personalMovieDB.genres[i - 1] = genre;
          // }
          let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

          if ( genres === null || genres === '' ) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
          } else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
          }
        }
        personalMovieDB.genres.forEach((item, i) => {
          console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
      }

};


// ----------------------Моё решение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function toggleVisibleMyDB(value) {
    
//   if (value === false) {
//     value = true;
//     console.log('value: ', value);
//   } else {
//     value = false;
//     console.log('value: ', value);
//   } 
//   return value;
// }


// function writeYourGenres() {
//   let genres = [];
//   for (let i = 1; i <= 3; i++) {
//       const j = prompt(`Ваш любимый жанр под номером ${i}`);
//     if (j != null && j != '' ) {
//       genres[i - 1] = j;
//       console.log('done a question of genres');
//     } else {
//       console.log('error a question of genres');
//       i--;
//     }
//   }
//   genres.forEach(function(item, i, genres) {
//     console.log(`Любимый жанр #${i+1} - это ${item}`);
//   });
//   return genres;
// }
