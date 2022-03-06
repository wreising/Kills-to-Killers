// Category and Year Select

function getUserSelections() {
  let category = document.getElementById('catagoryInput');
  let year = document.getElementById('yearInput');

  let selectedCategory = category.options[category.selectedIndex].value;
  let selectedYear = year.options[year.selectedIndex].value;

  console.log(selectedCategory, selectedYear);

  // fetch 1
  // Crime Data Explorer API

  let apiKeyCrime = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
  let endPointCrime = "https://crime-data-explorer.fr.cloud.gov/#"
  let crimeType

  // variable for user selection for Crime category = selectedCategory
  // variable for user selection for Year - selectedYear


  // let category = document.getElementById('catagoryInput');
  // let year = document.getElementById('yearInput');

  // let selectedCategory = category.options[category.selectedIndex].value;
  // let selectedYear = year.options[year.selectedIndex].value;

  //if statements for crime/band selection

  // selectedCategory = 'Murder'

  if (selectedCategory === 'Murder') {
    crimeType = 'homicide'
    let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

    let totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('murderNumber').innerHTML = totalCleared
      })

    selectedYear++
    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('murderNumber+1').innerHTML = totalCleared
      })

    selectedYear--
    selectedYear--
    totalCleared = 0
    if (selectedYear === 1984) {
      document.getElementById('murderNumber-1').innerHTML = 'N/A'
    }
    else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared
          }
          document.getElementById('murderNumber-1').innerHTML = totalCleared
        })
    }

  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = 'Robbery'

  if (selectedCategory === 'Robbery') {
    crimeType = 'robbery'
    let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('robberyNumber').innerHTML = totalCleared
      })
    selectedYear++
    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('robberyNumber+1').innerHTML = totalCleared
      })

    selectedYear--
    selectedYear--
    totalCleared = 0

    if (selectedYear === 1984) {
      document.getElementById('robberyNumber-1').innerHTML = 'N/A'
    }
    else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared
          }
          document.getElementById('robberyNumber-1').innerHTML = totalCleared
        })
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = 'Grand Theft Auto'

  if (selectedCategory === 'Grand Theft Auto') {
    crimeType = 'motor-vehicle-theft'
    let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('gtaNumber').innerHTML = totalCleared
      })
    selectedYear++
    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('gtaNumber+1').innerHTML = totalCleared
      })

    selectedYear--
    selectedYear--
    totalCleared = 0

    if (selectedYear === 1984) {
      document.getElementById('gtaNumber-1').innerHTML = 'N/A'
    }
    else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared
          }
          document.getElementById('gtaNumber-1').innerHTML = totalCleared
        })
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = 'Arson'

  if (selectedCategory === 'Arson') {
    crimeType = 'arson'
    let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('arsonNumber').innerHTML = totalCleared
      })
    selectedYear++
    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('arsonNumber+1').innerHTML = totalCleared
      })

    selectedYear--
    selectedYear--
    totalCleared = 0

    if (selectedYear === 1984) {
      document.getElementById('arsonNumber-1').innerHTML = 'N/A'
    }
    else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared
          }
          document.getElementById('arsonNumber-1').innerHTML = totalCleared
        })
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = 'Assault'

  if (selectedCategory === 'Assault') {
    crimeType = 'aggravated-assault'
    let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('assaultNumber').innerHTML = totalCleared
      })
    selectedYear++
    totalCleared = 0

    fetch(crimeApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared
        }
        document.getElementById('assaultNumber+1').innerHTML = totalCleared
      })

    selectedYear--
    selectedYear--
    totalCleared = 0

    if (selectedYear === 1984) {
      document.getElementById('assaultNumber-1').innerHTML = 'N/A'
    }
    else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared
          }
          document.getElementById('assaultNumber-1').innerHTML = totalCleared
        })

    }
  }

  // code for fetch 1

  // variable for crime data for selected year = crimeNumber

  // variable for crime data for prior year = crimeNumberPrior
  // variable for crime data for following year = crimeNumberFollowing


  //// fetch 2 - Spotify
  //// immediately follows fetch 1 setting variable crimeNumber and also gets selectedCategory


  let keyword = ''

  if (selectedCategory === 'Murder') {
    keyword = 'The Killers'
  } else if (selectedCategory === 'Robbery') {
    keyword = 'The Police'
  } else if (selectedCategory === 'Grand Theft Auto') {
    keyword = 'Motorhead'
  } else if (selectedCategory === 'Arson') {
    keyword = 'FireHouse'
  } else {
    keyword = 'Knife Party'
  }

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=" + keyword + "&type=tracks&offset=0&limit=100&numberOfTopResults=5",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
        "x-rapidapi-key": "13afb176d0msh1bebd3b48309acfp18e1bbjsn28d023f0b592",
      },
    })
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
      let codeABC = data.tracks.items[x].data.uri.split(":");


      //song player on page
      const musicBox = `<iframe
              src="https://open.spotify.com/embed/track/${codeABC[2]}?utm_source=generator"
              width="100%"
              height="80"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                           
            ></iframe>`;
      // render to page
      document.getElementById('songTitle').innerHTML = songName
      document.getElementById('bandName').innerHTML = artistName
      document.getElementById('art').setAttribute('src', albumImg)
      document.getElementById('albumTitle').innerHTML = albumName
      document.getElementById("frame").innerHTML = musicBox;
    })
}




////// fetch 3 - MediaWiki - search WikiPedia
////// follows fetch 2 setting variable songName
////// https://www.mediawiki.org/wiki/API:Main_page

let endPointWiki = "https://www.mediawiki.org/w/api.php"

////// code for fetch 3

////// use songName to do a search on Wikipedia

let set = "set" // establish variables - types of info we can get

