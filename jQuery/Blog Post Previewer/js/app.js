$('#flashMessage').hide(); // Hide the flash message on window onload

// Click event
$('#previewButton').click(function() {

  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  
  // Place title and content on the page when button is clicked
  $("#blogTitlePreview").text(title);
  $("#blogContentPreview").html(content);

  // Show flash message and delay the removal of the message
  $('#flashMessage').slideDown(1000).delay(3000).slideUp(); 
});
