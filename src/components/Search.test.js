import axios from "axios";
import {getMovies, GET_MOVIE, reducer} from '../ducks/resultsReducer'
import * as actions from '../ducks/resultsReducer'
import * as types from '../ducks/resultsReducer'
import {Search} from './Search';
import { functionExpression } from "@babel/types";

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

// test('getMovie results using my movie', () => {
//     // expect.assertions('merry');
//     let results = getMovies('my movie');
//     window.alert(results);
//     expect(results.length).toBe(1);
//     });

// test("getMovies with my movie as input", () => {
//     expect.assertions(1);
//     return Search.getMovies('my movie').then(data => {
//         expect(data.name).toEqual('My Little Pony: The Movie (2017)');
//     });
// });
