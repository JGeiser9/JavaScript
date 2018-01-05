/* --------------- SONG CONSTRUCTION --------------- */
function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
}; // .play method (prototype)

Song.prototype.pause = function() {
  this.isPlaying = false;
}; // .stop method (prototype)

Song.prototype.toHTML = function() {
  //builds up a string containing all song information
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  } // highlist song if the song is playing
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
}; // .toHTML method (prototype)
