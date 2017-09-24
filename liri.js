console.log("Node Testing Done Here");

var Twitter = require('twitter');

var config = require('./keys2');

var T = new Twitter(config);

var params = {
    q: 'JSON_NAVARRO',
    result_type: "recent",
    count: 20
};
var tweetDate = [];




T.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {

        for (var x in tweets) {
            tweetDate.push(tweets[x].created_at);
            console.log('Tweeted: "', tweets[x].text, '" on ' + tweetDate[x]);
         
        }

    
    }

    if (error) {
        console.log(error);
    }
});