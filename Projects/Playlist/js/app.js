/* ---------------- PUTTING IT ALL TOGETHER --------------- */
var playlist = new Playlist ();

var song0 = new Song("One Thing", "San Holo", "3:53");
var song1 = new Song("Doubt It", "KYLE", "3:38");
var song2 = new Song("The Beautiful & Damned", "G-Eazy", "3:08");
var song3 = new Song("Him & I (With Halsey)", "G-Eazy", "4:28");

playlist.add(song0);
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);

// **** selecting the html element to place the contents of var playlist ****
var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);

// **** button functionality ****
/* For each button we need to refresh the .renderInElement
   for updates on which song is playing */
   
var playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play()
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var previousButton = document.getElementById("previous");
previousButton.onclick = function () {
  playlist.previous();
  playlist.renderInElement(playlistElement);
}

var pauseButton = document.getElementById("pause");
pauseButton.onclick = function () {
  playlist.pause();
  playlist.renderInElement(playlistElement);
}
