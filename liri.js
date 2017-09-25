var spotify = require('./spotify')

var keys = require('./keys2');



var Twitter = require('twitter');

var T = new Twitter(keys);

var twitterName = 'JSON_NAVARRO';


if(process.argv[2] == "my-tweets" && process.argv.length > 3){
    twitterName = process.argv[3];
    console.log("haha");
}
console.log(twitterName);
var params = {
    screen_name: twitterName,
    result_type: "recent",
    count: 20
};

if(process.argv.length == 3 && process.argv[2] == "my-tweets"){
    console.log("HELP - If you want to search your own TWEETS use LIRI like: node liri.js my-tweets <YOUR_SCREEN_NAME>");
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

};