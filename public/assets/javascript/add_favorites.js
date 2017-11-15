$(document).ready(function() {

	$("#save-favorite-btn").on("click", function(event) {
      event.preventDefault();
      // get the search term from text box
      var queryTerm = $("#queryTerm").val().trim();
      // ajax get request to /api/artist
      $.ajax({
      url: "/api/artist",
      method: "GET",
      data: {
      	artist: queryTerm
      }
    }).done(function(response) {
      console.log(response); 
      });   
      // on response console.log





	});

});