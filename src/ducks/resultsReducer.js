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
    payload: axios.get(
      `https://[ENDPOINT].api.tunefind.com/api/v2/movie/${userInput}`
    )
  };
}

export function getTvShows(userInput) {
  return {
    type: GET_TV_SHOW,
    payload: axios
      .get(`https://76b663e5.api.tunefind.com/api/v2/show/${userInput}`, {
        auth: {
          username: "76b663e5aa154beb16c3d3f67313a49e",
          password: "8c4e5d0e527cd3bd9af2a7dd45f3fbd3"
        }
      })
      .then(res => console.log(res))
  };
}

export function getImage(userInput) {
  return {
    type: GET_IMAGE,
    payload: axios.get(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${userInput}`
    )
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_MOVIE}_FULLFILLED`:
      // I dont know how payload.data ends. need to test on real api
      console.log(`GET_MOVIE ${payload.data}`);
      return {
        ...state,
        movResults: payload.data
      };
    case `${GET_TV_SHOW}_FULLFILLED`:
      // I dont know how payload.data ends. need to test on real api
      console.log(`GET_TV_SHOW ${payload.data}`);
      return {
        ...state,
        tvShowResults: payload.data
      };
    case `${GET_IMAGE}_FULLFILLED`:
      // I dont know how payload.data ends. need to test on real api
      console.log(`GET_IMAGE ${payload.data}`);
      return {
        ...state,
        tvShowResults: payload.data
      };
    default:
      return state;
  }
}
