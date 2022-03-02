// Search

// fetch 1

// fetch 2 - Spotify - https://rapidapi.com/Glavier/api/spotify23/

fetch(
  "https://spotify23.p.rapidapi.com/search/?q=the%20killers&type=tracks&offset=0&limit=100&numberOfTopResults=5",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
      "x-rapidapi-key": "13afb176d0msh1bebd3b48309acfp18e1bbjsn28d023f0b592",
    },
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //random method trigger after seach function
    let x = Math.floor(Math.random() * 100);
    console.log(x);

    //or use x = # of incident

    //calling var for output of a song
    var songName = data.tracks.items[x].data.name;
    var artistName = data.tracks.items[x].data.artists.items[0].profile.name;
    var albumImg =
      data.tracks.items[x].data.albumOfTrack.coverArt.sources[0].url;
    var albumName = data.tracks.items[x].data.albumOfTrack.name;
    var songLink = data.tracks.items[x].data.albumOfTrack.sharingInfo.shareUrl;

    //title of the song
    console.log("song:" + data.tracks.items[x].data.name);
    //artist name
    console.log(
      "artist: " + data.tracks.items[x].data.artists.items[0].profile.name
    );
    //album picture
    console.log(
      "img: " + data.tracks.items[x].data.albumOfTrack.coverArt.sources[0].url
    );
    // album name
    console.log("album name: " + data.tracks.items[x].data.albumOfTrack.name);
    //Album link
    console.log(
      "link: " + data.tracks.items[x].data.albumOfTrack.sharingInfo.shareUrl
    );
    //more song of artist info on Spotify
    console.log(data.tracks.items[x].data.artists.items[0].uri);
    // link of the song
    console.log(data.tracks.items[x].data.uri);
  });

// render to page
