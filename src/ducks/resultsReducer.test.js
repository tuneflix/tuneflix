const { getTvShows, getMovieSongs,getMovieImdb} = require("./resultsReducer");

// Jorge
// test("getTvShows should return an array with TV search results", () => {
//   expect(getTvShows("the-marvelous-mrs-maisel")).toEqual();
// });


//Fethi

test("getMovieSongs() should take a parameter", () => {
  
  let param = "green-book"
  expect(param.length).toBeGreaterThan(0)
})

test("getMovieSongs() should not return undefined ", () => {
  
  expect(getMovieSongs("Bohemian")).not.toBe(undefined);
})

test("getMovieImdb() should take a parameter", () => {
  let param = "green-book"
  expect(param.length).toBeGreaterThan(0)
})

test("getMovieImdb() should not return undefined", () => {
  
  expect(getMovieSongs("Bohemian")).not.toBe(undefined);
})

test("getMovieImdb() should take an param  and param should not include year",() => {
    expect("green-book").not.toMatch(/2017/)
})


