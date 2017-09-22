// I used the train scheduler code just as a base to try to get the code working.  The train scheduler code 
// had a nice table that I was hoping to get the search results to display in.  The thought was that once the code was working we 
// could integrate it into the bootstrap code that Joe found. Whatever html theme we do decide to use, we will need the following:
// - a search form at the top to search events. 
// - a table or div area to display the results below the search form.  We can use Ticketmaster or Eventful as a reference
// - perhaps the search results could take up 8 out of the 12 columns to the left; Leaving an open area to the right to 
//      display Gifs.  Pretty much, it would be like the size of an ad area to the right that many websites have
// - the gifs will be playing on the right, while the user can view the search results on the left.

// DISPLAYS CURRENT TIME ======================================================================

  var currentTime = moment();
  $("#current-time").text((currentTime).format("hh:mm"));
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


// ===================================================================================================================
// TICKETMASTER API AND AJAX CALL

  var searchCounter = 0;
  var queryTerm = "";
	var queryURLBase = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=NdH7ttoqHEznKuGMVdBINJqbG8r9w1Kk&keyword=";

  $("#search-events-btn").on("click", function(event) {
        event.preventDefault();
      
        queryTerm = $("#search-events-input").val().trim();
        console.log(queryTerm);
        var queryURL = queryURLBase + queryTerm;
        console.log(queryURL); 
        searchCounter++;
        console.log("Historical Number of Searches: " + searchCounter);

$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response); 
      console.log(response._embedded.events); 


      // =====FOR LOOP THAT DISPLAYS SEARCH RESULTS INTO A TABLE========================================== 
    
     
      var events = response._embedded.events;  

      $("#event-name").empty();
      for (var i = 0; i < events.length; i++) {          
        

        var eventName = response._embedded.events[i].name; 
        console.log(eventName);         

        var location = response._embedded.events[i].dates.timezone;     
                
        var date = response._embedded.events[i].dates.start.localDate;
        
        var time = response._embedded.events[i].dates.start.localTime; 

        var url = response._embedded.events[i].url;
        console.log(url);    
       

        $("#event-table > tbody").append("<tr><td>" + eventName + "</td><td>" + location + "</td><td>" +
        date + "</td><td>" + time + "</td><td><a target='_blank' href='" + url + "'>visit website</a></td></tr>");        

      };

      });
    // ==================================================================================================================
    // Giphy API AND AJAX CALL

    
        // var queryURL = queryURLBase + queryTerm;
        // console.log(queryURL); 

        var queryURLGiphy = "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=55fa83da04e04a38b28a997d9d79f784&limit=6";

    $.ajax({
      url: queryURLGiphy,
      method: "GET"
    })
    .done(function(giphyData) {      
      var results = giphyData.data;
      console.log(giphyData);
      console.log(queryURLGiphy);

      $("#gifsArea").empty();
          for (var j = 0; j < results.length; j++) {
            var gifDiv = $("<div>");
            var gifImage = results[j].images.fixed_height_small.url;
            var gifs = $("<img>").attr("src", gifImage);

            
      $("#gifsArea").prepend(gifs);      

      }

    

    });
      
     });   


// END OF WORKING CODE FOR TICKETMASTER



// ==============================================================================================================    
// POSSIBLE TRIVIA DATABASE API
// TRIVIA DATABASE - WAS WORKING BUT NOW ARRAY WONT DISPLAY
//     var queryURL = "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy";

// $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);

//     });

    // var questions = $("<div>");
    // questions = response.results[0].question;
    // $("#please-display").append(questions);

// END OF TRIVIA DATABASE



// ============================================================================================================
// POSSIBLE SPOTIFY API
//  var queryURL = "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES HTTP/1.1"
//  person = "james+bay";

// var queryURL = "https://api.spotify.com/v1/albums/"


// });

// var templateSource = document.getElementById('results-template').innerHTML,
//     template = Handlebars.compile(templateSource),
//     resultsPlaceholder = document.getElementById('results'),
//     playingCssClass = 'playing',
//     audioObject = null;

// var fetchTracks = function (albumId, callback) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/albums/' + albumId,
//         success: function (response) {
//             callback(response);
//         }
//     });
// };

// var searchAlbums = function (query) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: query,
//             type: 'album'
//         },
//         success: function (response) {
//             resultsPlaceholder.innerHTML = template(response);
//         }
//     });
// };

// results.addEventListener('click', function (e) {
//     var target = e.target;
//     if (target !== null && target.classList.contains('cover')) {
//         if (target.classList.contains(playingCssClass)) {
//             audioObject.pause();
//         } else {
//             if (audioObject) {
//                 audioObject.pause();
//             }
//             fetchTracks(target.getAttribute('data-album-id'), function (data) {
//                 audioObject = new Audio(data.tracks.items[0].preview_url);
//                 audioObject.play();
//                 target.classList.add(playingCssClass);
//                 audioObject.addEventListener('ended', function () {
//                     target.classList.remove(playingCssClass);
//                 });
//                 audioObject.addEventListener('pause', function () {
//                     target.classList.remove(playingCssClass);
//                 });
//             });
//         }
//     }
// });

// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     searchAlbums(document.getElementById('query').value);
// }, false);