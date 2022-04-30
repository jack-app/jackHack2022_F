const app = require("express")();
const request = require("request");
const axios = require("axios");

var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api", (req, res, next) => {
  const menu = encodeURI(req.query.menu);
  axios
    .get(`https://katsuo.herokuapp.com/api?search=${menu}`)
    .then((response) => {
      res.send(response.data[0]);
    });
});

module.exports = app;
