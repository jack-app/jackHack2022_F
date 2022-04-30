const app = require("express")();
const request = require("request");

var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api", (req, res, next) => {
  const menu = encodeURI(req.query.menu);
  request(
    "https://katsuo.herokuapp.com/api?search=" + menu,
    (error, response, body) => {
      if (error !== null) {
        console.error("error:", error);
        res.status(500);
      }
      res.send(body);
    }
  );
});

module.exports = app;
