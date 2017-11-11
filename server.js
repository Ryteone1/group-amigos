
var express = require("express");
// bring in the models
var db = require("./models");

// listen on port 3000
var port = process.env.PORT || 3000;
var app = express();




db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});