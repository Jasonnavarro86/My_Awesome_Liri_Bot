// These variables require the modules and files needed for the spotify calls. 
var request = require('request');

// I entered all my code for the movie-time command in this function.
function movieTime(){
    if(process.argv[2] == "movie-time"){
        // Here I put all words from process.argv.length 3 + into an array and then join them for the omdb api.
        var movieString = [];


        // this is the for loop that pushes all the process.argv 3+ into the movieString array.
        for (var m = 3; m < process.argv.length; m++) {
          
            movieString.push(process.argv[m]);
        }
         // this joins the array StringSong to pass into the movieParams
        var movieName = movieString.join('&');

        // here I create the omdb url for the request-npm. 
        var movieParams = 'http://www.omdbapi.com/?t='+ movieName +'&apikey=40e9cece';
     
        // This is my defualt if no movie name is entered instructions are generated and an example.
        if (process.argv[2] == "movie-time" && process.argv.length == 3) {
            movieParams = 'http://www.omdbapi.com/?t=mr.nobody&apikey=40e9cece';
            console.log("HELP - To search for movies use LIRI like so:  node liri.js movie-this '<movie name here>'");
            console.log("If we search 'Mr. Nobody' Results will look like:");
        }
      
        request(movieParams, function (error, response, body) {
            if(error){
            console.log('error:', error);
            } 
            
            var JSONBody = JSON.parse(body);
            
            console.log('Title:', JSONBody.Title); 
            console.log('Year the movie came out:', JSONBody.Year); 
            console.log('IMDB Rating:', JSONBody.imdbRating); 
            console.log('Rotten Tomatoes Rating:', JSONBody.Ratings[1].Value); 
            console.log('Country where the movie was produced:', JSONBody.Country); 
            console.log('Language:', JSONBody.Language); 
            console.log('Plot:', JSONBody.Plot); 
            console.log('Actors:', JSONBody.Actors); 
          });
    }
};

module.exports ={
    movieTime : movieTime(),
} 