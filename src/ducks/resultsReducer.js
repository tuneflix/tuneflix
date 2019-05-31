import axios from "axios";

const initialState = {
  movResults: [],
  songResults: [],
  tvShowResults: [],
  tvShowSeasons: [],
  tvShowEpisodes: [],
  image: [],
  imdbLoading: true,
  tvShowSeasonLoading: true,
  tvshowEpisodeLoading: true
};

// Action Types

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_SONG = "GET_MOVIE_SONG";
export const GET_TV_SHOW = "GET_TV_SHOW";
export const GET_TV_SHOW_SEASONS = "GET_TV_SHOW_SEASONS";
export const GET_TV_SHOW_EPISODES = "GET_TV_SHOW_EPISODES";
export const GET_TV_SHOW_EPISODE_SONGS = "GET_TV_SHOW_EPISODE_SONGS";
export const GET_IMAGE = "GET_IMAGE";

// Action Creator

export function getMovies(userInput) {
  return {
    type: GET_MOVIE,
    payload: axios.get(`/api/movie/${userInput}`)
  };
}

export function getMovieSongs(movieName) {
  
  return {
    type: GET_MOVIE_SONG,
    payload: axios.get(`/api/songs/movie/${movieName}`)
  };
}

export function getTvShows(userInput) {
  return {
    type: GET_TV_SHOW,
    payload: axios.get(`/api/search/tvshow/${userInput}`)
  };
}
export function getTvShowInfo(tvShowID) {
  return {
    type: GET_TV_SHOW_SEASONS,
    payload: axios.get(`/api/tvshow/${tvShowID}`)
  };
}

export function getTvShowSeason(tvshowName, seasonNum) {
  return {
    type: GET_TV_SHOW_EPISODES,
    payload: axios.get(`/api/tvshow/${tvshowName}/season/${seasonNum}`)
  };
}

export function getTvShowEpisodeSongs(tvShowName, seasonNum, episodeID) {
  return {
    type: GET_TV_SHOW_EPISODE_SONGS,
    payload: axios.get(
      `/api/tvshow/${tvShowName}/season/${seasonNum}/episode/${episodeID}`
    )
  };
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
        console.log(action.payload.data)
      return {
        ...state,
        songResults: action.payload.data
      };
    case `${GET_TV_SHOW}_FULFILLED`:
      return {
        ...state,
        tvShowResults: action.payload.data
      };
    case `${GET_TV_SHOW_SEASONS}_FULFILLED`:
      return {
        ...state,
        tvShowSeasons: action.payload.data.seasons
      };

    case `${GET_IMAGE}_FULFILLED`:
      return {
        ...state,
        image: action.payload.data,
        imdbLoading: false
      };

    case `${GET_TV_SHOW_EPISODES}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        tvShowEpisodes: action.payload.data.episodes,
        tvShowSeasonLoading: false
      };

    case `${GET_TV_SHOW_EPISODE_SONGS}_FULFILLED`:
      return {
        ...state,
        songResults: action.payload.data.songs,
        tvShowEpisodeLoading: false
      };

    default:
      return state;
  }
}
