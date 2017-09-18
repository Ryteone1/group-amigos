
// $(document).on("click", function() {
// 	var person = $(this).html();


// WORKING TICKETMASTER URL AND CODE

$("#search-events").on("click", function(event) {
  event.preventDefault();

  var person = $(this).html();
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

// END OF WORKING CODE FOR TICKETMASTER

    

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