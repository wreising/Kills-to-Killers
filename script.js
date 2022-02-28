// Search

// fetch 1

// fetch 2

fetch("https://spotify23.p.rapidapi.com/search/?q=the%20killers&type=tracks&offset=0&limit=100&numberOfTopResults=5", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
    "x-rapidapi-key": "13afb176d0msh1bebd3b48309acfp18e1bbjsn28d023f0b592"
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    song = data.tracks.items[7].data.name
    console.log(song)
  })

// render to page