// The Killer album match to Murder
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
    var codeSong = data.tracks.items[x].data.albumOfTrack.id;

    document.getElementById("songTitle").innerHTML = songName;
    document.getElementById("albumArt").setAttribute("src", albumImg);

    const musicBox = `<iframe
              src="https://open.spotify.com/embed/album/${codeSong}?utm_source=generator"
              width="100%"
              height="200"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>`;

    document.getElementById("frame").innerHTML = musicBox;
  });

{
}

//need to fix
