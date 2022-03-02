Search

attempt at a modal dialog

attempt at a modal dialog

numbers from modal dialog
crimeCatagory = ""
yearNumber = ""

fetch 1
Crime Data Explorer API

let apiKey = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
let endPoint = "https://crime-data-explorer.fr.cloud.gov/#"

function killToKillers({
  // searth for crimeNumber
  fetch(endPoint apiKey) // include crimeCatagory and yearNumber in search
then(function (response) {
  return response.json();
})
  .then(function (data) {
    crimeNumber = data.----#

    // fetch 2 - Spotify - https://rapidapi.com/Glavier/api/spotify23/
    // immediately follows setting variable crimeNumber

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
        song = data.tracks.items[7].data.name
        album =
          year =
          art = //from here or Wikipedia
          fetch(wiki API)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              data to post to page = data.____

              // MediaWiki - search WikiPedia

              https://www.mediawiki.org/wiki/API:Main_page

              https://www.mediawiki.org/w/api.php
             })
      })
  })

// Post all data to page
document.getElementById("song").innerHTML = song
document.getElementById("album").innerHTML = album
document.getElementById("year").innerHTML = year
document.getElementById("data").innerHTML = data
document.getElementById("data").innerHTML = data
document.getElementById("data").innerHTML = data
// render to page