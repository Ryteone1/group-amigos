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
  // code i copied from a solution and was modeling our code from
  app.post("/api/posts", function(req, res) {
    db.FavArtist.create(req.body).then(function(dbFavArtist) {
      res.json(dbFavArtist);
    });
  });
  

// ==============================================
  app.get("/api/artist", function(req, res) {
  	console.log(req.query.artist);
  	db.FavArtist.findOne({
  		where: {
  			fav_artist: req.query.artist
  		}	

  	}).then(function(artist) {
  		console.log(artist);
  		// check if artist === null
  		if (artist === null) {
			db.FavArtist.create({				
				fav_artist: req.query.artist,
				search_hits: 1				
			}).then(function(artist) {
				console.log(artist);
	  			res.json(artist);	
			});
		}

  		console.log("after db search: ");
  		db.FavArtist.update({
  			search_hits: artist.search_hits+1
  		}, {
  			where: {
  				id: artist.id
  			}
  		})
  		.then(function(artist) {
  			console.log("update success");
  			console.log(artist);
  			res.json(artist.get ({
  				plain: true
  			}));
  		})
  		.catch(function(err) {
  			console.log(err);
  			res.json(err);
  		});
  	});  	
  	
  });



	app.get("/api/trending", function(req,res) {
		db.FavArtist.findAll({
			order: [["search_hits", "DESC"]],
			limit: 3
		}).then(function(results) {
			res.json(results);
		})
	});


};
