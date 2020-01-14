//Ah ah ah, you didn't say the magic word...
var require;
require("dotenv").config();

//variables
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var axios = require("axios");

function songInfo(userParameter) {
    if(!userParameter){
        userParameter = "The Sign";
    }
    spotify.search({ type: 'track', query: userParameter }).then(function(response) {
        for (var i = 0; i < 5; i++) {
            // var spotifyResults = 
            //     "\n==============================" +
            //         "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
            //         "\nSong Name: " + response.tracks.items[i].name +
            //         "\nAlbum Name: " + response.tracks.items[i].album.name +
            //         "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            // console.log(spotifyResults);
            console.log(response)
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}
songInfo();