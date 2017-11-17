// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // sign_in route loads sign_in.html
  app.get("/sign_in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign_in.html"));
  });

  // create_account route loads create_account.html
  app.get("/create_account", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create_account.html"));
  });

  // add_favorites route loads add_favorites.html
  app.get("/add_favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add_favorites.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/add_favorites", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create_account.html"));
  });

};
