// ----- STAGE 2: convert to a search input -----

$(document).ready(function() {

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   $('form').submit(function (event) {
     event.preventDefault();
     var search = $('#search');

    // the AJAX part
    
    var searchField = search.val();
    var flickrOptions = {
      tags: searchField,
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
