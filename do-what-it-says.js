var fs = require('fs');
var spotifyApi = require('node-spotify-api');
var Twitter = require('twitter');
var spotifyKeys2 = require('./spotKeys');
var keys2 = require('./keys2');
var T = new Twitter(keys2);

function doIt() {
    if (process.argv[2] == "do-what-it-says") {


        var dat2 = fs.readFile('random.txt', 'utf8', function (err, data) {

            if (err) {
                console.log(err);
            }
            
            var splitTxt = data.split(",");
            

            if(splitTxt[0] == 'spotify-this-song'){
                var spotify2 = new spotifyApi(spotifyKeys2);
                var params3 = {
                    type: 'track',
                    query: splitTxt[1],
                    limit: 20
                  };

                  spotify2.search(params3, function (err, data) {
                    if (err) {
                      return console.log('ERROR occurred: ' + err);
                    }
                
                // Here I set this variable to search the JSON.
                    var getJSON = data.tracks.items[0];
                
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

            if(splitTxt[0] == 'my-tweets'){
 
                var quotesOff = splitTxt[1].split('"');
                
                var params4 = {
                    screen_name: quotesOff[1],
                    result_type: "recent",
                    count: 20
                };

                T.get('statuses/user_timeline', params4, function (error, tweets, response) {
                    if (!error) {
                
                        for (var x in tweets) {
                            
                            console.log('Tweeted: "', tweets[x].text, '" on ' + tweets[x].created_at);    
                        }    
                    }
                    if (error) {
                        console.log(error);
                    }
                });

            }



            // if(splitTxt[0] == 'spotify-this-song'){

            // }
        });

        
    }
}

module.exports = {
    doIt: doIt()
}