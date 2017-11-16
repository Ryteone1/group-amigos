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
  // ====================================================
  // trying to get findorcreate to work

  // User
  // .findOrCreate({
  // 	where: {
  // 		username: 'sdepold'
  // 	}, 
  // 	defaults: {
  // 		job: 'Technical Lead JavaScript'
  // 	}
  // }).spread((user, created) => {
  //   console.log(user.get({
  //     plain: true
  //   }))
  //   console.log(created)

// ==============================================
  app.get("/api/artist", function(req, res) {
  	console.log(req.query.artist);
  	db.FavArtist.findOrCreate({
  		where: {
  			fav_artist: req.query.artist
  		}
  	}).then(function(artist) {
  		// check if artist === null
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
  			res.json(artist);
  		})
  		.catch(function(err) {
  			console.log(err);
  			res.json(err);
  		});
  	});  	
  	
  });



	app.get("/api/trending",function(req,res) {
		db.FavArtist.findAll({
			order: [["search_hits", "DESC"]],
			limit: 3
		}).then(function(results) {
			res.json(results);
		})
	});


};
