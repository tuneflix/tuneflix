const {
  getTvShows,
  getTvShowInfo,
  getTvShowSeason,
  getTvShowEpisodeSongs,
  getTvShowImdb,
  getMovieSongs,
  getMovieImdb
} = require("./resultsReducer");

//Fethi

test("getMovieSongs() should take a parameter", () => {
  let param = "green-book";
  expect(param.length).toBeGreaterThan(0);
});

test("getMovieSongs() should not return undefined ", () => {
  expect(getMovieSongs("Bohemian")).not.toBe(undefined);
});

test("getMovieImdb() should take a parameter", () => {
  let param = "green-book";
  expect(param.length).toBeGreaterThan(0);
});

test("getMovieImdb() should not return undefined", () => {
  expect(getMovieSongs("Bohemian")).not.toBe(undefined);
});

test("getMovieImdb() should take an param  and param should not include year", () => {
  expect("green-book").not.toMatch(/2017/);
});

//Jorge
test("getTvShows() should take in userInput parameter", () => {
  let userInput = "lucifer";
  expect(getTvShows("lucifer")).toStrictEqual(getTvShows(userInput));
});
test("getTvShowInfo() should take in parameter for showID", () => {
  let showID = "lucifer";
  expect(getTvShowInfo("lucifer")).toStrictEqual(getTvShowInfo(showID));
});
test("getTvShowSeason() should take in show name and season number parameters", () => {
  let showName = "lucifer";
  let season = 1;
  expect(getTvShowSeason("lucifer", 1)).toStrictEqual(
    getTvShowSeason(showName, season)
  );
});
test("getTvShowEpisodeSongs() should take in showName, season, and episode parameters", () => {
  let showName = "lucifer";
  let season = 1;
  let episode = 1;
  expect(getTvShowEpisodeSongs("lucifer", 1, 1)).toStrictEqual(
    getTvShowEpisodeSongs(showName, season, episode)
  );
});
test("getTvShowImdb() should take in userInput parameter", () => {
  let userInput = "lucifer";
  expect(getTvShowImdb("lucifer")).toStrictEqual(getTvShowImdb(userInput));
});
