const unirest = require("unirest");

module.exports = {
  getMovie: (req, res) => {
    console.log("hit")
    const { userInput } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          "https://76b663e5.api.tunefind.com/api/v2/search/movie"
        );

        req.query({
          q: userInput
        });

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "ab8a3eff-0b33-413b-bbf0-f5e670090891,d22a85fa-2e7b-422b-ab8a-c3c33df0e5a0",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          Authorization:
            "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM="
        });
        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body.results);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  },
  getMovieSongs: (req, res) => {
    const { movieName } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/movie/${movieName}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "113b838f-e342-457c-8d64-90c9346388f3,f6e67797-c7bc-4077-8764-b8c535f3c20f",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          Authorization:
            "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM="
        });

        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body.songs);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  },
  getTvShow: (req, res) => {
    const { userInput } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          "https://76b663e5.api.tunefind.com/api/v2/search/show"
        );

        req.query({
          q: userInput
        });

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "4e248edc-8cd6-4a12-83d7-86a8cb508674,8ffb2a80-42a7-4300-beca-f9f0206d92f9",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          Authorization:
            "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM="
        });
        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body.results);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  },
  getTvShowSeason: (req, res) => {
    const { tvshowName, seasonNum } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/show/${tvshowName}/season-${seasonNum}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "562cfd16-fcde-4a05-8368-0774434b74b1,9ebfab5f-5d4e-46c9-9eae-13d92e3415da",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          Authorization:
            "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM="
        });

        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  },
  getTvShowEpisode: (req, res) => {
    const { tvshowName, seasonNum, episodeID } = req.params;
    console.log("hit");
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/show/${tvshowName}/season-${seasonNum}/${episodeID}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "ade0bad5-65db-4c2d-840f-d3d62303e861,92b43335-51a3-49dc-85d3-a308675b024e",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          Authorization:
            "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM="
        });

        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  },
  getIMDB: (req, res) => {
    const { userInput } = req.params;
    let searchTerm = userInput.split("-").join("+");
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          "https://movie-database-imdb-alternative.p.rapidapi.com/"
        );

        req.query({
          page: "1",
          r: "json",
          s: searchTerm
        });

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "movie-database-imdb-alternative.p.rapidapi.com",
          "Postman-Token":
            "8a3d4746-b035-4f46-82d5-8c5b7cfe73e1,12bd3da8-b423-4d04-a72e-eacca52e7f52",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          "X-RapidAPI-Key":
            "56854a6fdemsh22582e2b147f73dp1bbf44jsnbeefa430086c",
          "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com"
        });

        req.end(function(res) {
          if (res.error) throw new Error(res.error);
          return resolve(res.body.Search);
        });
      });
    };
    results().then(body => res.status(200).json(body));
  }
};
