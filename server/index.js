require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const {
  SERVER_PORT,
  TF_USERNAME,
  TF_PASSWORD,
  IMDB_HOST,
  IMDB_KEY
} = process.env;

const rc = require("./req_controller.js");

app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

//TUNEFIND
//--movie endpoints
app.get("/api/movie/:userInput", rc.getMovie);
app.get("/api/songs/movie/:movieName", rc.getMovieSongs);
//--tv show endpoints
app.get("/api/search/tvshow/:userInput", rc.getTvShow);
app.get("/api/tvshow/:tvshowName", rc.getTvShowInfo);
app.get("/api/tvshow/:tvshowName/season/:seasonNum", rc.getTvShowSeason);
app.get(
  "/api/tvshow/:tvshowName/season/:seasonNum/episode/:episodeID",
  rc.getTvShowEpisode
);

//IMDB Endpoints
app.get("/api/imdb/:userInput", rc.getIMDB);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
