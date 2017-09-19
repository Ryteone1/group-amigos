// I used the train scheduler code just as a base to try to get the code working.  The train scheduler code 
// had a nice table that I was hoping to get the search results to display in.  The thought was that once the code was working we 
// could integrate it into the bootstrap code that Joe found. Whatever html theme we do decide to use, we will need the following:
// - a search form at the top to search events. 
// - a table or div area to display the results below the search form.  We can use Ticketmaster or Eventful as a reference
// - perhaps the search results could take up 8 out of the 12 columns to the left; Leaving an open area to the right to 
//      display Gifs.  Pretty much, it would be like the size of an ad area to the right that many websites have
// - the gifs will be playing on the right, while the user can view the search results on the left.

$(document).ready(function() {

// clicking submit on a new search should execute a function that will allow us to capture the search term and store it in a variable
// var person.
$("#search-events").on("click", function(event) {
  event.preventDefault();

// Need var person should be equal to the search term the user entered.  We should then be able to integrate var person into the 
// queryURL so that the user can search for new events. THIS IS CURRENTLY NOT WORKING.  I CAN GET IT TO WORK IF I 
// MANUALLY SET VAR PERSON.  IF YOU COMMENT OUT var person = $(this).html();
// AND UNCOMMENT var person = "shakira", you will see that the proper results get displayed.

  var person = $(this).html();

  // var person = "shakira";
  console.log(this);
	var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=NdH7ttoqHEznKuGMVdBINJqbG8r9w1Kk&keyword=" + person;

$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response); 
      // console.log(response._embedded.events[0].images);
      // console.log(response._embedded.events[0].dates.start.localDate);
      console.log(response._embedded.events);    

      
      // var eventList = $("#event-list");
      var events = response._embedded.events;  

      $("#event-name").empty();
      for (var i = 0; i < events.length; i++) {      
        
        var eventName = $("<div id=event-name>" + response._embedded.events[i].name + "</div>");          

        var location = $("<div id=location>" + response._embedded.events[i].dates.timezone + "</div>");     
                
        var date = $("<div id=date>" + response._embedded.events[i].dates.start.localDate + "</div>");
        
        var time = $("<div id=time>" + response._embedded.events[i].dates.start.localTime + "</div>"); 

        var url = $("<div id=url>" + response._embedded.events[i].url + "</div>");       

        $("#event-name").append(eventName, location, date, time, url, "<br>"); 



      };
     });

     
    });

});

// END OF WORKING CODE FOR TICKETMASTER

    
// TRIVIA DATABASE API
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



// SPOTIFY API
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