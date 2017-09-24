var spotifyApi = require('node-spotify-api');
var spotifyKeys = require('./spotKeys');

function spotifyBot(){


    var spotify1 = new spotifyApi(spotifyKeys);
       
      spotify1.search({ type: 'track', query: 'if i ruled the world' , limit: 1}, function(err, data) {
        if (err) {
          return console.log('ERROR occurred: ' + err);
        }
        // album name
        console.log("Album Name: ", data.tracks.items[0].album.name);

        // song name
         console.log("Song Name: ", data.tracks.items[0].name);

        //  artist name
        for(var i = 0; i < data.tracks.items[0].artists.length; i++){
        console.log("Artist: ", data.tracks.items[0].artists[i].name);
        }
      // console.log("Link", data.tracks.items[0].external_urls.spotify); 
      
      });




}


module.exports = {
    spotifyBot: spotifyBot(),
}