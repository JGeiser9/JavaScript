$(document).ready(function() {

 // ----- STAGE 1 -----
 $('button').click(function () {
    $("button").removeClass("selected"); // remove "selected" from all buttons
    $(this).addClass("selected"); // add "selected" and styling to clicked

    // AJAX
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text(); // grabs the text within the button tag for the search
    var flickrOptions = {
      tags: animal,
      format: "json"
    }; // customizing the search based on which button is clicked
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      // loop through each item in the JSON items object
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML); // printing the string to the "photos" div
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos); // sending the request

  }); // end click

}); // end ready
