

// bring in the models
var db = require("./models");

var app = express();

// listen on port 3000
var port = process.env.PORT || 3000;



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});