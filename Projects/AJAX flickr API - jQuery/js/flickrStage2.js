// ----- STAGE 2: convert to a search input -----

$(document).ready(function() {

   $('form').submit(function (event) {
     event.preventDefault(); // prevent the browser from opening a new window
     var $search = $('#search'); // store the input tag's id="search"
     
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var input = $search.val(); // requesting the tags equal to the value the user searches for
    var flickrOptions = {
      tags: input,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready
