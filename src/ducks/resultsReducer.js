import axios from "axios";

const initialState = {
  movResults: [],
  tvShowResults: [],
  image: []
};

// Action Types

export const GET_MOVIE = "GET_MOVIE";
export const GET_TV_SHOW = "GET_TV_SHOW";
export const GET_IMAGE = "GET_IMAGE";

// Action Creator

export function getMovies(userInput) {
  return {
    type: GET_MOVIE,
    payload: axios.get(`/api/movie/:${userInput}`)
  };
}

export function getTvShows(userInput) {
  return {
    type: GET_TV_SHOW,
    payload: axios.get(`/api/tvshow/:${userInput}`)
  };
}
export function getImage(userInput) {
  return {
    type: GET_IMAGE,
    payload: axios.get(`/api/imdb/:${userInput}`)
  };
}

export default function reducer(state = initialState, action) {
  
 
  switch (action.type) {
    case `${GET_MOVIE}_FULFILLED`:
      return {
        ...state,
        movResults: action.payload.data 
      };
    case `${GET_TV_SHOW}_FULFILLED`:
      return {
        ...state,
        tvShowResults: action.payload.data
      };
    case `${GET_IMAGE}_FULFILLED`:
      return {
        ...state,
        tvShowResults: action.payload.data
      };
    default:
      return state;
  }
}
