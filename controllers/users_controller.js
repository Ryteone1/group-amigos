// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.FavArtist.findAll({
    include: [db.User],
    // Here we specify we want to return our burgers in ordered by ascending burger_name
    order: [
      ["fav_artist", "ASC"]
    ]
  })
  // use promise method to pass the favorite artists...
  .then(function(dbFavArtist) {
    // into the main index, updating the page
    var hbsObject = {
      FavArtist: dbFavArtist
    };
    return res.render("index", hbsObject);
  });
});

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.FavArtist.create({
    fav_artist: req.body.fav_artist
  })
  // pass the result of our call
  .then(function(dbFavArtist) {
    // log the result to our terminal/bash window
    console.log(dbFavArtist);
    // redirect
    res.redirect("/");
  });
});

// put route to devour a burger
router.put("/burgers/update", function(req, res) {
  // If we are given a user, create the customer and give them this devoured burger
  if (req.body.user) {
    db.User.create({
      user: req.body.user,
      Fav_ArtistId: req.body.fav_artist_id
    })
    .then(function(dbUser) {
      return db.FavArtist.update({
        buytickets: true
      }, {
        where: {
          id: req.body.fav_artist_id
        }
      });
    })
    .then(function(dbFavArtist) {
      res.redirect("/");
    });
  }
  // If we aren't given a customer, just update the burger to be devoured
  else {
    db.FavArtist.update({
      buytickets: true
    }, {
      where: {
        id: req.body.fav_artist_id
      }
    })
    .then(function(dbFavArtist) {
      res.redirect("/");
    });
  }
});

module.exports = router;
