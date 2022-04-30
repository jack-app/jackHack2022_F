const app = require("express")();
const axios = require("axios");

var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api", (req, res, next) => {
  const menu = encodeURI(req.query.menu);
  axios
    .get(`https://katsuo.herokuapp.com/api?search=${menu}`)
    .then((response) => {
      if (response.data.length) {
        res.send(response.data[0]);
      } else {
        res.status(500);
      }
    });
});

module.exports = app;
