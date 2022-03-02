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
    let songName = data.tracks.items[x].data.name;
    let artistName = data.tracks.items[x].data.artists.items[0].profile.name;
    let albumImg = data.tracks.items[x].data.albumOfTrack.coverArt.sources[0].url;
    let albumName = data.tracks.items[x].data.albumOfTrack.name;
    let songLink = data.tracks.items[x].data.albumOfTrack.sharingInfo.shareUrl;


    //title of the song
    console.log("song:" + songName);
    //artist name
    console.log("artist: " + artistName);
    //album picture
    console.log("img: " + albumImg);
    // album name
    console.log("album name: " + albumName);
    //Album link
    console.log("link: " + songLink);


    // render to page
    document.getElementById('songTitle').innerHTML = songName
    document.getElementById('bandName').innerHTML = artistName
    document.getElementById('art').setAttribute('src', albumImg)
    document.getElementById('albumTitle').innerHTML = albumName
    // document.getElementById('spotifyLink').setAttribute('href', songLink)
  })
  .catch(err => console.error(err))


