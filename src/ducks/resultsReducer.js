import axios from "axios";

const initialState = {
  movResults: [],
  songResults: [],
  tvShowResults: [],
  tvShowSeason: [],
  tvShowEpisode : [],
  image: []
};

// Action Types

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_SONG = "GET_MOVIE_SONG";
export const GET_TV_SHOW = "GET_TV_SHOW";
export const GET_TV_SHOW_SEASONS = "GET_SEASONS";
export const GET_TV_SHOW_EPISODE = "GET_TV_SHOW_EPISODE";
export const GET_IMAGE = "GET_IMAGE";

// Action Creator

export function getMovies(userInput) {
  return {
    type: GET_MOVIE,
    payload: axios.get(`/api/movie/${userInput}`)
  };
}

export function getMovieSongs(movieName) {
  return{
    type: GET_MOVIE_SONG,
    payload: axios.get(`/api/songs/movie/${movieName}`)
  }
}

export function getTvShows(userInput) {
  return {
    type: GET_TV_SHOW,
    payload: axios.get(`/api/tvshow/${userInput}`)
  };
}

export function getTvShowSeason (tvshowName,seasonNum){
  return {
    type: GET_TV_SHOW_SEASONS ,
    payload : axios.get(`/api/tvshow/${tvshowName}/season/:${seasonNum}`)
  }
}

export function getTvShowEpisode(seasonNum, episodeID){
  return {
    type:GET_TV_SHOW_EPISODE,
    payload : axios.get(`/api/tvshow/:tvshowName/season/${seasonNum}/episode/:${episodeID}`)
  }
}
export function getImage(userInput) {
  return {
    
    type: GET_IMAGE,
    payload: axios.get(`/api/imdb/${userInput}`)
  };
}

export default function reducer(state = initialState, action) {
  
 
  switch (action.type) {
    case `${GET_MOVIE}_FULFILLED`:
      return {
        ...state,
        movResults: action.payload.data 
      };
    case `${GET_MOVIE_SONG}_FULFILLED`:
      return {
        ...state,
        songResults: action.payload.data
    
      }
    case `${GET_TV_SHOW}_FULFILLED`:
      return {
        ...state,
        tvShowResults: action.payload.data
      };
    case `${GET_IMAGE}_FULFILLED`:
      return {
        ...state,
        image: action.payload.data
      };
    case `${GET_TV_SHOW_SEASONS}_FULFILLED`:
      return {
        ...state,
        tvShowSeason: action.payload.data
      }

    case `${GET_TV_SHOW_EPISODE}_FULFILLED`:
      return {
        ...state,
        tvShowEpisode: action.payload.data
      }
    
    default:
      return state;
  }
}
