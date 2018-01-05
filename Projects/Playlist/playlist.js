/* --------------- PLAYLIST CONSTRUCTION --------------- */
function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song); // This method adds a new song to the playlist
}; // .add method (prototype)

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex]; // Plays the first song in playlist at index 0
  currentSong.play();
}; // .play method (prototype)

Playlist.prototype.pause = function(){
  var currentSong = this.songs[this.nowPlayingIndex]; // Stop the song that is currently playing
  currentSong.pause();
}; // .stop method (prototype)

Playlist.prototype.next = function() {
  this.pause(); // Stop the current playing songs when next is clicked
  this.nowPlayingIndex++;

  // If the index = length of the array, we must set the next button to play the first song
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
}; // .next method (prototype)

Playlist.prototype.previous = function() {
  this.pause(); // Stop the current playing songs when next is clicked
  this.nowPlayingIndex--;

  // If the index = length of the array, we must set the next button to play the first song
  if(this.nowPlayingIndex < 0) {
    this.nowPlayingIndex = this.songs.length - 1;
  }
  this.play();
}; // .next method (prototype)

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.songs.length; i++){
    list.innerHTML += this.songs[i].toHTML();
  };
}; // .renderInElement method (prototype)
