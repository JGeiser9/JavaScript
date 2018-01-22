$('.spoiler span').hide(); // hide contents on window load

// Create button dynamically and append to webpage
  const $button = $('<button>Reveal Spoiler</button>'); //created with a $ signifyng it contains jquery
  $('.spoiler').append($button); // add the button to the paragraph

// When the paragraph is clicked if it is a button show the contents of the previous elemenet (Span)
// by using DOM traversal And hide the button
  $('.spoiler').on('click', 'button', function(event) {
    $(this).prev().show();
    $(this).hide();
  });

