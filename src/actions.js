export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setGenres = (genresList) => ({
  type: 'setGenres',
  genresList,
});

export const filterGenre = (filterList) => ({
    type: 'filterGenre',
    filterList,
});