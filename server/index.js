require("dotenv").config();
const express = require("express");
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

//TuneFind Endpoints
app.get("/api/movie/:userInput", rc.getMovie);
app.get("/api/songs/movie/:id");

//IMDB Endpoints
app.get("/api/image", rc.getImage);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
