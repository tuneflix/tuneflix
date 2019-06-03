import axios from "axios";

const initialState = {
  movResults: [],
  movIMDB: [],
  songResults: [],
  tvShowResults: [],
  tvShowSeasons: [],
  tvShowEpisodes: [],
  tvShowIMDB: [],
  imdbLoading: true,
  tvShowSeasonLoading: true,
  tvshowEpisodeLoading: true
};

// Action Types

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_SONG = "GET_MOVIE_SONG";
export const GET_MOVIE_IMDB = "GET_MOVIE_IMDB";

export const GET_TV_SHOW = "GET_TV_SHOW";
export const GET_TV_SHOW_SEASONS = "GET_TV_SHOW_SEASONS";
export const GET_TV_SHOW_EPISODES = "GET_TV_SHOW_EPISODES";
export const GET_TV_SHOW_EPISODE_SONGS = "GET_TV_SHOW_EPISODE_SONGS";
export const GET_TV_SHOW_IMDB = "GET_TV_SHOW_IMDB";

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

export function getMovieImdb(userInput) {
  return {
    type: GET_MOVIE_IMDB,
    payload: axios.get(`/api/imdb/${userInput}`)
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
export function getTvShowImdb(userInput) {
  return {
    type: GET_TV_SHOW_IMDB,
    payload: axios.get(`/api/imdb/${userInput}`)
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //Cases for Movies
    case `${GET_MOVIE}_FULFILLED`:
      return {
        ...state,
        movResults: action.payload.data
      };
    case `${GET_MOVIE_SONG}_FULFILLED`:
        
      return {
        ...state,
        songResults: action.payload.data
      };
    case `${GET_MOVIE_IMDB}_FULFILLED`:
      console.log(action.payload.data)
      let filteredMovData = action.payload.data.filter(
        result => result.Type === "movie"
      );
      console.log(filteredMovData);
      return {
        ...state,
        movIMDB: filteredMovData,
        imdbLoading: false
      };

    //Cases for TV
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

    case `${GET_TV_SHOW_EPISODES}_FULFILLED`:
      // console.log(action.payload.data);
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
    case `${GET_TV_SHOW_IMDB}_FULFILLED`:
      let filteredTVData = action.payload.data.filter(
        result => result.Type === "series"
      );
      // console.log(filteredTVData);
      return {
        ...state,
        tvShowIMDB: filteredTVData,
        imdbLoading: false
      };

    default:
      return state;
  }
}
