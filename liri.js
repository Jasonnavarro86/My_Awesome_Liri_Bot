// These variables require the modules and files needed for the liri bot.
var spotify = require('./spotify')

var keys = require('./keys2');

var movieThis = require('./movie-this');

var doWhatItSays = require('./do-what-it-says');

var Twitter = require('twitter');


// Here I give the instructions if only liri is inputed with no other items. 
if(process.argv.length == 2){
    console.log("HELP - \n To Check Tweets Run: node liri.js my-tweets <screen name here> \n To Spotify A Song Run: node liri.js spotify-this-song '<song name here>' \n To Find Out More About a Movie Run:node liri.js movie-this '<movie name here>'");
}
// The code from here on out only runs if "my-tweets is ran".
if(process.argv[2] == "my-tweets"){
var T = new Twitter(keys);

var twitterName = 'JSON_NAVARRO';


if(process.argv[2] == "my-tweets" && process.argv.length > 3){
    twitterName = process.argv[3];
  
}


var params = {
    screen_name: twitterName,
    result_type: "recent",
    count: 20
};

if(process.argv.length == 3 && process.argv[2] == "my-tweets"){
    console.log("HELP - If you want to search your own TWEETS use LIRI like: node liri.js my-tweets <screen name here>");
    console.log("Here is an Example of the results using my own Screen Name:");
}

if(process.argv[2] == "my-tweets"){
T.get('statuses/user_timeline', params, function (error, tweets, response) {
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
};