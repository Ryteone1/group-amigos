// I used the train scheduler code just as a base to try to get the code working.  The train scheduler code 
// had a nice table that I was hoping to get the search results to display in.  The thought was that once the code was working we 
// could integrate it into the bootstrap code that Joe found. Whatever html theme we do decide to use, we will need the following:
// - a search form at the top to search events. 
// - a table or div area to display the results below the search form.  We can use Ticketmaster or Eventful as a reference
// - perhaps the search results could take up 8 out of the 12 columns to the left; Leaving an open area to the right to 
//      display Gifs.  Pretty much, it would be like the size of an ad area to the right that many websites have
// - the gifs will be playing on the right, while the user can view the search results on the left.

$(document).ready(function(){
    


// DISPLAYS CURRENT TIME ======================================================================

  // var currentTime = moment();
  // $("#current-time").text((currentTime).format("hh:mm"));
  // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


// ===================================================================================================================
// TICKETMASTER API AND AJAX CALL

  var searchCounter = 0;
  var queryTerm = "";
	var queryURLBase = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=NdH7ttoqHEznKuGMVdBINJqbG8r9w1Kk&keyword=";

  $("#search-events-btn").on("click", function(event) {
        event.preventDefault();

//  CODE BELOW USES JQUERY TO SELECT THE DIV WITH CLASS NAME PANEL-PRIMARY AND CHANGE THE DISPLAY ATTR FROM NONE TO BLOCK
  $(".panel-primary").attr("style", "display: block;");

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


      // =====FOR LOOP THAT DISPLAYS SEARCH RESULTS INTO A TABLE========================================== 
    
     
      var events = response._embedded.events; 
      console.log(events); 

      $("#event-table > tbody").empty();
      // $("#search-events-form").reset();

      for (var i = 0; i < events.length; i++) {          
        

        var eventName = events[i].name;             
       
        var location = events[i]._embedded.venues[0].city.name;
                          
        var date = events[i].dates.start.localDate;
        
        var time = events[i].dates.start.localTime; 

        var url = events[i].url;
                  

        $("#event-table > tbody").append("<tr><td>" + eventName + "</td><td>" + location + "</td><td>" +
        date + "</td><td>" + time + "</td><td><a target='_blank' href='" + url + "'>more info</a></td></tr>");        

      };

      });
    // ==================================================================================================================
    // Giphy API AND AJAX CALL          

    var queryURLGiphy = "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=55fa83da04e04a38b28a997d9d79f784&limit=10";

    $.ajax({
      url: queryURLGiphy,
      method: "GET"
    })
    .done(function(giphyData) {      
      var results = giphyData.data;
      console.log(giphyData);
      console.log(queryURLGiphy);

      $("#gifsArea").empty();

      // var carouselA = $("<div class='carousel'>");

          for (var j = 0; j < results.length; j++) {

            if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
      // // var gifDiv = $("<a class='carousel-item' href='"#" + j + ""'>");
            var gifDiv = $("<div>");
            var gifImage = results[j].images.fixed_height_small.url;
            var gifs = $("<img>").attr("src", gifImage);

            $("#gifsArea").append(gifs);

  //      <div class="carousel">
  //   <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
  //   <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
  //   <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
  //   <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
  //   <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
  // </div>     
      // carouselA.append(gifs); 
            }

          }

      // $(".panel-primary").prepend(carouselA);
      // $('.carousel').carousel();    

    });
      
     });   


 var availableTags = [
      "Shawn Mendes",
      "Ed Sheeran",
      "Shakira",
      "Shaggy",
      "Sam Hunt",
      "Sam Smith",
      "Seventh Day Slumber",
      "Seal",
      "Big Sean",
      "Rae Sremmund",
      "Sia",
      "Skillet",
      "SZA",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#search-events-input" ).autocomplete({
      source: availableTags
    });


// ===========CODE FOR THE GOOGLE MAP AT BOTTOM OF PAGE ============================================================================
// ===========COMMENTED OUT BECAUSE MAP STOPPED WORKING WHEN MOVED HERE FROM INDEX.HTML ============================================

   // function myMap() {
   //  var mapProp= {
   //  center:new google.maps.LatLng(28.538336,-81.379234),
   //  zoom:5,
   //  };

   //  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   //  } 
    

    });  // CLOSING FOR $(document).ready(function() {})




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