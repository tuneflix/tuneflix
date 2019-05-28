const unirest = require("unirest");

module.exports = {
  getMovie: async (req, res) => {
    // const { userInput } = req.param;
    // console.log(userInput);
    console.log("hit");
    var req = unirest(
      "GET",
      "https://76b663e5.api.tunefind.com/api/v2/search/movie"
    );

    req.query({
      q: "matrix"
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
    let arr = [];
    req.end(function(res) {
      if (res.error) throw new Error(res.error);
      // console.log(res.body.results);
      arr.push(res.body.results);
    });
    console.log(arr);

    // res.status(200).josn(res.body);
  },
  getImage: (req, res) => {
    console.log("hit");
  }
};
