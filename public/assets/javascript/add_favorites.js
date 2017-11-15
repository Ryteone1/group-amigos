// THIS CODE HAS BEEN INCORPORATED INTO LOGIC.JS AND IS NOT CURRENTLY BEING USED RIGHT NOW BECAUSE WE ARE NO LONGER USING add_favorits.html.  I have kept the file as a model example if we were to use multiple html pages with their own search buttons.

$(document).ready(function() {

	$("#search-events-btn").on("click", function(event) {
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