import axios from "axios";
import {endpoints} from "./config";
import {filterGenre, setGenres, setMostPopularMovies} from "./actions";

export const getMostPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((data) => {
            dispatch(setMostPopularMovies(data.data.results));
        });
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((data) => {
            dispatch(setGenres(data.data.genres));
        });
};

 export const pickGenre = (id) => (dispatch) => {

         axios
             .get(endpoints.genreMovies(id))
             .then((data) => {
               dispatch(filterGenre(data.data.results));
             });

 };

