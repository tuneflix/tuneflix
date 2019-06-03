import axios from "axios";
import {getMovies, GET_MOVIE, getMovieSongs, GET_MOVIE_SONG, getMovieImdb, GET_MOVIE_IMDB, getTvShows, GET_TV_SHOW, getTvShowInfo, GET_TV_SHOW_SEASONS, getTvShowSeason, GET_TV_SHOW_EPISODES, getTvShowEpisodeSongs, GET_TV_SHOW_EPISODE_SONGS, getTvShowImdb, GET_TV_SHOW_IMDB, reducer} from '../ducks/resultsReducer'
import * as actions from '../ducks/resultsReducer'
import * as types from '../ducks/resultsReducer'
import {handleInput, handleClick, userInput} from './Search';

describe('getMovies', () => {
    let userInput = 'merry'
    it('should bring in payload', () => {
        const text = 'payload'
        const expectedAction = {
            type: types.GET_MOVIE,
            payload: axios.get(`/api/movie/${userInput}`)
        }
    expect(actions.getMovies(userInput)).toEqual(expectedAction)
});
});

test('Input with banana', () => {
    expect(getMovies('banana')).toEqual(
        {
            type: GET_MOVIE,
            payload: axios.get(`/api/movie/banana`)
          }
    )
})

test('Input with banana', () => {
    expect(getMovieSongs('banana')).toEqual(
        {
            type: GET_MOVIE_SONG,
            payload: axios.get(`/api/songs/movie/banana`)
          }
    )
})

test('Input with banana', () => {
    expect(getMovieImdb('banana')).toEqual(
        {
            type: GET_MOVIE_IMDB,
            payload: axios.get(`/api/imdb/banana`)
          }
    )
})

test('Input with banana', () => {
    expect(getTvShows('banana')).toEqual(
        {
            type: GET_TV_SHOW,
            payload: axios.get(`/api/search/tvshow/banana`)
          }
    )
})

test('Input with banana', () => {
    expect (getTvShowInfo('banana')).toEqual(
       {
          type: GET_TV_SHOW_SEASONS,
          payload: axios.get(`/api/tvshow/`)
        }
    )
})

test('Input with The Marvelous Mrs. Maisel Season 2', () => {
    expect (getTvShowSeason('The Marvelous Mrs. Maisel', 2)).toEqual(
       {
          type: GET_TV_SHOW_EPISODES,
          payload: axios.get(`/api/tvshow/'The Marvelous Mrs. Maisel'/season/2`)
        }
    )
})

test('Input with The Marvelous Mrs. Maisel Season 2 Episode 1', () => {
    expect (getTvShowEpisodeSongs('The Marvelous Mrs. Maisel', 2, 1)).toEqual(
        {
            type: GET_TV_SHOW_EPISODE_SONGS,
            payload: axios.get(
              `/api/tvshow/The Marvelous Mrs. Maisel/season/2/episode/1`
            )
          }
    )
})

test('Input The Marvelous Mrs. Maisel', () => {
    expect (getTvShowImdb('The Marvelous Mrs. Maisel')).toEqual(
        {
            type: GET_TV_SHOW_IMDB,
            payload: axios.get(`/api/imdb/The Marvelous Mrs. Maisel`)
          }
    )
})

// test('test axios calls', () => {
//     expect assertions(3);
//     function handleClick()


// })


