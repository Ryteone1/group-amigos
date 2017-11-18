// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models and passport
var db = require("../models");
// var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
//   app.post("/api/sign_in", passport.authenticate("local"), function(req, res) {
//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     res.json("/index");
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/create_account", function(req, res) {
//     console.log(req.body);
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     }).then(function() {
//       res.redirect(307, "/api/sign_in");
//     }).catch(function(err) {
//       console.log(err);
//       res.json(err);
//       // res.status(422).json(err.errors[0].message);
//     });
//   });

//   // POST route for saving a new post
//   // code i copied from a solution and was modeling our code from
//   app.post("/api/posts", function(req, res) {
//     db.FavArtist.create(req.body).then(function(dbFavArtist) {
//       res.json(dbFavArtist);
//     });
//   });
  

// // ==============================================

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     }
//     else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });


  

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
