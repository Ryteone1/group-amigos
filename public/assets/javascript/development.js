 // Giphy API AND AJAX CALL ===============================

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







// ================================================================
  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});

// CHIRPY EXAMPLE =========================================
$.post("/api/trending", newChirp)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.body + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });



  var trendingData = "initial test";
  $("#trending-now-area").append("<div>" + trendingData + "</div>"); 

