// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.FavArtist.create(req.body).then(function(dbFavArtist) {
      res.json(dbFavArtist);
    });
  });




}