import { combineReducers } from "redux";

const initialState = {
 showCards: true,
};

const componentState = (state = initialState, action) => {
 switch (action.type) {
   case 'toggleCards': return {
    ...state,
    showCards: action.shouldShow,
   };
  default: return state;
 }
};

const initialStateOfCards = {
    mostPopular: [],
};


const cards = (state = initialStateOfCards, action) => {
    switch (action.type) {
        case 'setMostPopularMovies': return {
            ...state,
            mostPopular: action.list,
        };
        case 'filterGenre': return {
            ...state,
            mostPopular: action.filterList,
        };
        default: return state;
    }
};

const initialStateOfGenres = {
    showGenres: [],
};

const genresCards = (state = initialStateOfGenres, action) => {
    switch (action.type) {
        case 'setGenres': return {
            ...state,
            showGenres: action.genresList,
        };
        default: return state;
    }
};

export const rootReducer = combineReducers({
    componentState,
    cards,
    genresCards,
});