const unirest = require("unirest");

module.exports = {
  getMovie: (req, res) => {
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
          if (res.error) {
            return resolve([]);
          }

          return resolve(res.body.songs);
        });
      });
    };
    results().then(body => {
      res.status(200).json(body);
    });
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
  getTvShowInfo: (req, res) => {
    const { tvshowName } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/show/${tvshowName}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "6e9f398b-bbe4-46a0-b054-a2e1de5fb6be,1121b5ed-c0df-4ca4-99f6-fb94d3da3e7c",
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
    // console.log(req.params);
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
    results().then(body => {
      if (body === undefined) {
        // console.log(`undefined ${body}`)
        res.status(200).json([]);
      } else {
        // console.log(body)
        res.status(200).json(body);
      }
    });
  },
  findArtist: (req, res) => {
    const { artistName } = req.params;

    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          "https://76b663e5.api.tunefind.com/api/v2/search/artist"
        );

        req.query({
          q: artistName,
          limit: "10"
        });

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "8d3663b8-c439-4d1c-8f80-749778389bd8,151a25d2-08ea-491d-9f0f-e08acfeb6958",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.13.0",
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
  getArtist: (req, res) => {
    const { artistID } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/artist/${artistID}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "56d2880c-7ed5-4180-aad2-010c8dbaba46,4b3cc5e7-da39-41e8-97de-322b5af7b1e8",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.13.0",
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
  getSong: (req, res) => {
    const { songID } = req.params;
    const results = () => {
      return new Promise((resolve, reject) => {
        var req = unirest(
          "GET",
          `https://76b663e5.api.tunefind.com/api/v2/song/${songID}`
        );

        req.headers({
          "cache-control": "no-cache",
          Connection: "keep-alive",
          "accept-encoding": "gzip, deflate",
          Host: "76b663e5.api.tunefind.com",
          "Postman-Token":
            "e80a4f71-80eb-44c3-ba84-5d19c6967292,7d4abc24-7609-4fff-b2a2-c1c2f1038440",
          "Cache-Control": "no-cache",
          Accept: "*/*",
          "User-Agent": "PostmanRuntime/7.13.0",
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
  }
};
