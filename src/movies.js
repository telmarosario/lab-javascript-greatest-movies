// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(listOfMovies) {
  return listOfMovies.map((movie) => movie.director);
}

function getAllDirectorsBonus(listOfMovies) {
  const directors = listOfMovies
    .map((movie) => movie.director) // Getting all the movie directors
    .filter(
      (movie, position, everyDirector) =>
        everyDirector.indexOf(movie) === position
    );
  return directors; // We have to find a way of returning false for the duplicate directors directors
} // indexOf returns the first position of the element being iterated
// everyDirector refers to the array mapped first so all the directors name
// movie is every object being iterated over
// position is the index of the movie current being iterated over, so when a duplicate name appears for the first time
// it will get added to the array being returned because it's indexOF matches it's position. The second time it appears,
// it will evaluate as false because it's position is different that it's indexOf therefore not being added to the array that is returned

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// The genre is an array it self
function howManyMovies(listOfMovies) {
  const spielbergMovies = listOfMovies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  ); // An array of objects with Spielberg movies
  const dramaMovies = spielbergMovies.filter(
    (movie) => movie.genre.includes('Drama') // Because the property gengre is an array we can use the method includes.
  );

  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Reduce
function scoresAverage(listOfMovies) {
  const scores = listOfMovies.map((movie) => movie.score); // First we get all the scores from each movie
  const sum = scores.reduce((result, score) => result + score); // Then we sum it all
  const average = sum / listOfMovies.length;

  return Number(average.toFixed(2));
  /* 
  Without the map
  const sum = listOfMovies.reduce((result, movie) => result + movie.score); // Then we sum it all
  const average = sum / listOfMovies.length; 

  return Number(average.toFixed(2));
*/

  /*
  Without the map explicit function

  const sum = listOfMovies.reduce(function(result, movie){
            return result + movie.score
  }, 0);

  const average = sum / listOfMovies.length; 

  return Number(average.toFixed(2));
*/
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// Reduce for the second part
function dramaMoviesScore(listOfMovies) {
  const dramaMovies = listOfMovies.filter((movie) =>
    movie.genre.includes('Drama')
  );
  const dramaMoviesScores = dramaMovies.map((movie) => movie.score);

  const sum = dramaMoviesScores.reduce((result, score) => result + score);
  const average = sum / dramaMoviesScores.length;

  /*   
    Trying to use without the map
  const sumScoreDramaMovies = dramaMovies.reduce(function(result, movie){
                        return result + movie.score
  }, 0)
  );
  const average = sumDramaMovies / dramaMovies.length; */

  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//Sort
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Sort is needed to do the rest
function orderAlphabetically(listOfMovies) {
  const first20Movies = listOfMovies.filter(function (movie, index) {
    return movie[index] < 21;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(listOfMovies) {
  /*    1. Go over each movie and get the duration string.
   */
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
