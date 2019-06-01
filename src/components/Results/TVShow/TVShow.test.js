const { getTvShows } = require("./TVShow");

test("getTvShows should return an array with TV search results", () => {
  expect(getTvShows("the-marvelous-mrs-maisel")).toEqual();
});
