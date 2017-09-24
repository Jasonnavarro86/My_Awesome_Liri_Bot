console.log("Node Testing Done Here");

var spotify = require('./spotify')

var keys = require('./keys2');



var Twitter = require('twitter');

var T = new Twitter(keys);

var params = {
    q: 'JSON_NAVARRO',
    result_type: "recent",
    count: 20
};

// if(process.argv[2] == "my-tweets"){
// T.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {

//         for (var x in tweets) {
            
//             console.log('Tweeted: "', tweets[x].text, '" on ' + tweets[x].created_at);    
//         }    
//     }
//     if (error) {
//         console.log(error);
//     }
// });

// };