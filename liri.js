console.log("Node Testing Done Here");

var Twitter = require('twitter');

var config = require('./keys2');

var T = new Twitter(config);



  var params = {q: 'JSON_NAVARRO',result_type: "recent", count: 20, text: "text"};

//   T.get('search/tweets', params, function(error, tweets, response) {
//     if (!error) {
//       console.log("search", tweets);
     
//     }
//     if(error){
//         console.log(error);
//     }
//   });


  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {


      console.log("statuses",tweets[0].text);
   
    }

    if(error){
        console.log(error);
    }
  });


