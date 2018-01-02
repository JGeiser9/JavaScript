$(document).ready(function() {

  $('button').click(function () {
    $.get('sidebar.html', function(response) {
         $('#ajax').html(response); // print the contents of sidebar.html in the id="ajax" div
    }); // end .get
    $('#load').hide(); // hide the button after it is clicked
  }); // end .click
  
}); // end .ready
