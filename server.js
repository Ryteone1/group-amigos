// DEPENDENCIES =================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// Sets up the Express App =====================
var app = express();
var PORT = process.env.PORT || 3000;


// Requiring our models for syncing ============
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory =========
app.use(express.static("public"));


//******NOT SURE IF NEEDED**********************
// override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
//**********************************************


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes =======================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// ==============================================


var env = process.env.NODE_ENV || 'development';

// ===============================================
// Custom code below that says that if we are in a development environment, set ({ force:true }), so that the tables will be dropped and recreated to accomodate for changes in development.

var syncOptions = {};
if (env === "development") {
	syncOptions.force = true;
	console.log("Dropping tables");
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
  });
});