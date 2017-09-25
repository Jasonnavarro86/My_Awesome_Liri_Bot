// These variables require the modules and files needed for the spotify calls. 
var spotifyApi = require('node-spotify-api');
var spotifyKeys = require('./spotKeys');

// I entered all my code for the spoitfy call in this function.
function spotifyBot() {
if (process.argv[2] == "spotify-this-song"){
  // I am inputing my spotify access keyes. 
  var spotify1 = new spotifyApi(spotifyKeys);

  // Here I put all words from process.argv 3 + into an array and then join them for the spotify api.
  var stringSong = [];

  // this is the for loop that pushes all the process.argv 3+ into the array.
  for (var y = 3; y < process.argv.length; y++) {
    stringSong.push(process.argv[y]);
  }
  // this joins the array StringSong. 
  var dynamicString = stringSong.join(' ')

// This is my defualt if no song name is entered when using spotify-this-song in the command line.
  if (process.argv[2] == "spotify-this-song" && process.argv.length == 3) {
    dynamicString = "The Sign";
  }

  // This is the params for the spotify node api. 
  if (process.argv[2] == "spotify-this-song") {
    var params2 = {
      type: 'track',
      query: dynamicString,
      limit: 20
    };
  }

// This is the code to search the spotify API and retrive a JSON.
  spotify1.search(params2, function (err, data) {
    if (err) {
      return console.log('ERROR occurred: ' + err);
    }

// Here I set this variable to search the JSON.
    var getJSON = data.tracks.items[0];

    // Here I set the instructions and example if no song-name is entered. 
    if (process.argv[2] == "spotify-this-song" && process.argv.length == 3) {
      getJSON = data.tracks.items[18];

      console.log("HELP - To search for songs use LIRI like so:  node liri.js spotify-this-song '<song name here>'");
      console.log("If we search 'The Sign' Results will look like:");
    }

    // This gets the song name
    console.log("We found this info for -", getJSON.name);
    console.log("The Artist on this track include: ");
    //  This gets the artist name
    for (var i = 0; i < getJSON.artists.length; i++) {
      console.log(getJSON.artists[i].name);
    }
    // This gets the album name
    console.log("Album Name: ", getJSON.album.name);

    // This gets the link to listen to the song on spotifiy. 
    console.log("Listen to the Song now:", getJSON.external_urls.spotify);
  });

}
}

// Here I send the function to my main file liri.js.
module.exports = {
  spotifyBot: spotifyBot(),
}