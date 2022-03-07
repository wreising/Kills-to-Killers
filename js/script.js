// Onload year and data

// add for all saved data for that seleted year

function loadPreviousData() {
  // post saved year

  let savedYear = localStorage.getItem("year");
  document.getElementById("headingYear").innerHTML = savedYear;

  //data chart local save

  let murderNumber = localStorage.getItem("murderNumber");
  let murderNumberPlus = localStorage.getItem("murderNumber+1");
  let murderNumberMinus = localStorage.getItem("murderNumber-1");

  if (murderNumber === null) {
    murderNumber = "N/A";
  }
  if (murderNumberPlus === null) {
    murderNumberPlus = "N/A";
  }
  if (murderNumberMinus === null) {
    murderNumberMinus = "N/A";
  }

  document.getElementById("murderNumber").innerHTML = murderNumber;
  document.getElementById("murderNumber+1").innerHTML = murderNumberPlus;
  document.getElementById("murderNumber-1").innerHTML = murderNumberMinus;

  let robberyNumber = localStorage.getItem("robberyNumber");
  let robberyNumberPlus = localStorage.getItem("robberyNumber+1");
  let robberyNumberMinus = localStorage.getItem("robberyNumber-1");

  if (robberyNumber === null) {
    robberyNumber = "N/A";
  }
  if (robberyNumberPlus === null) {
    robberyNumberPlus = "N/A";
  }
  if (robberyNumberMinus === null) {
    robberyNumberMinus = "N/A";
  }

  document.getElementById("robberyNumber").innerHTML = robberyNumber;
  document.getElementById("robberyNumber+1").innerHTML = robberyNumberPlus;
  document.getElementById("robberyNumber-1").innerHTML = robberyNumberMinus;

  let gtaNumber = localStorage.getItem("gtaNumber");
  let gtaNumberPlus = localStorage.getItem("gtaNumber+1");
  let gtaNumberMinus = localStorage.getItem("gtaNumber-1");

  if (gtaNumber === null) {
    gtaNumber = "N/A";
  }
  if (gtaNumberPlus === null) {
    gtaNumberPlus = "N/A";
  }
  if (gtaNumberMinus === null) {
    gtaNumberMinus = "N/A";
  }

  document.getElementById("gtaNumber").innerHTML = gtaNumber;
  document.getElementById("gtaNumber+1").innerHTML = gtaNumberPlus;
  document.getElementById("gtaNumber-1").innerHTML = gtaNumberMinus;

  let arsonNumber = localStorage.getItem("arsonNumber");
  let arsonNumberPlus = localStorage.getItem("arsonNumber+1");
  let arsonNumberMinus = localStorage.getItem("arsonNumber-1");

  if (arsonNumber === null) {
    arsonNumber = "N/A";
  }
  if (arsonNumberPlus === null) {
    arsonNumberPlus = "N/A";
  }
  if (arsonNumberMinus === null) {
    arsonNumberMinus = "N/A";
  }

  document.getElementById("arsonNumber").innerHTML = arsonNumber;
  document.getElementById("arsonNumber+1").innerHTML = arsonNumberPlus;
  document.getElementById("arsonNumber-1").innerHTML = arsonNumberMinus;

  let assaultNumber = localStorage.getItem("assaultNumber");
  let assaultNumberPlus = localStorage.getItem("assaultNumber+1");
  let assaultNumberMinus = localStorage.getItem("assaultNumber-1");

  if (assaultNumber === null) {
    assaultNumber = "N/A";
  }
  if (assaultNumberPlus === null) {
    assaultNumberPlus = "N/A";
  }
  if (assaultNumberMinus === null) {
    assaultNumberMinus = "N/A";
  }

  document.getElementById("assaultNumber").innerHTML = assaultNumber;
  document.getElementById("assaultNumber+1").innerHTML = assaultNumberPlus;
  document.getElementById("assaultNumber-1").innerHTML = assaultNumberMinus;
}

loadPreviousData();

//crime data table production

// Category and Year Select

function getUserSelections() {
  let category = document.getElementById("catagoryInput");
  let year = document.getElementById("yearInput");

  let selectedCategory = category.options[category.selectedIndex].value;
  let selectedYear = year.options[year.selectedIndex].value;

  console.log(selectedCategory, selectedYear);

  let headingYear = localStorage.setItem("year", selectedYear);
  let headingCategory = localStorage.setItem("category", selectedCategory);

  document.getElementById("headingYear").innerHTML = selectedYear;
  document.getElementById("headingCategory").innerHTML = selectedCategory;

  let songName = localStorage.getItem("songTitle")
  let artistName = localStorage.getItem("bandName")
  let albumImg = localStorage.getItem("art")
  let albumName = localStorage.getItem("albumTitle")
  let musicBox = localStorage.getItem("frame")

  document.getElementById("songTitle").innerHTML = songName;
  document.getElementById("bandName").innerHTML = artistName;
  document.getElementById("art").innerHTML = albumImg;
  document.getElementById("albumTitle").innerHTML = albumName;
  document.getElementById("frame").innerHTML = musicBox;


  //if statement for selecting the category and retrieving the data from the table

  // fetch 1
  // Crime Data Explorer API

  // let apiKeyCrime = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
  // let endPointCrime = "https://crime-data-explorer.fr.cloud.gov/#"

  // variable for user selection for Crime category = selectedCategory
  // variable for user selection for Year - selectedYear

  // code for fetch 1

  let crimeType;

  // let category = document.getElementById('catagoryInput');
  // let year = document.getElementById('yearInput');

  // let selectedCategory = category.options[category.selectedIndex].value;
  // let selectedYear = year.options[year.selectedIndex].value;

  //if statements for crime/band selection

  // selectedCategory = 'Murder'

  if (selectedCategory === "Murder") {
    crimeType = "homicide";
    let crimeApi =
      "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/" +
      crimeType +
      "/" +
      selectedYear +
      "/" +
      selectedYear +
      "?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

    console.log(crimeApi);

    let totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("murderNumber").innerHTML = totalCleared;
        localStorage.setItem("murderNumber", totalCleared);
      });

    console.log(totalCleared);

    selectedYear++;
    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("murderNumber+1").innerHTML = totalCleared;
        localStorage.setItem("murderNumber+1", totalCleared);
      });

    selectedYear--;
    selectedYear--;
    totalCleared = 0;
    if (selectedYear === 1984) {
      document.getElementById("murderNumber-1").innerHTML = "N/A";
      localStorage.setItem("murderNumber-1", totalCleared);
    } else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared;
          }
          document.getElementById("murderNumber-1").innerHTML = totalCleared;
          localStorage.setItem("murderNumber-1", totalCleared);
        });
    }
  }
  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = "Robbery";

  if (selectedCategory === "Robbery") {
    crimeType = "robbery";
    let crimeApi =
      "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/" +
      crimeType +
      "/" +
      selectedYear +
      "/" +
      selectedYear +
      "?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("robberyNumber").innerHTML = totalCleared;
        localStorage.setItem("robberyNumber", totalCleared);
      });
    selectedYear++;
    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("robberyNumber+1").innerHTML = totalCleared;
        localStorage.setItem("robberyNumber+1", totalCleared);
      });

    selectedYear--;
    selectedYear--;
    totalCleared = 0;

    if (selectedYear === 1984) {
      document.getElementById("robberyNumber-1").innerHTML = "N/A";
      localStorage.setItem("robberyNumber-1", totalCleared);
    } else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared;
          }
          document.getElementById("robberyNumber-1").innerHTML = totalCleared;
          localStorage.setItem("robberyNumber-1", totalCleared);
        });
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = "Grand Theft Auto";

  if (selectedCategory === "Grand Theft Auto") {
    crimeType = "motor-vehicle-theft";
    let crimeApi =
      "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/" +
      crimeType +
      "/" +
      selectedYear +
      "/" +
      selectedYear +
      "?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("gtaNumber").innerHTML = totalCleared;
        localStorage.setItem("gtaNumber", totalCleared);
      });
    selectedYear++;
    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("gtaNumber+1").innerHTML = totalCleared;
        localStorage.setItem("gtaNumber+1", totalCleared);
      });

    selectedYear--;
    selectedYear--;
    totalCleared = 0;

    if (selectedYear === 1984) {
      document.getElementById("gtaNumber-1").innerHTML = "N/A";
      localStorage.setItem("gtaNumber-1", totalCleared);
    } else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared;
          }
          document.getElementById("gtaNumber-1").innerHTML = totalCleared;
          localStorage.setItem("gtaNumber-1", totalCleared);
        });
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = "Arson";

  if (selectedCategory === "Arson") {
    crimeType = "arson";
    let crimeApi =
      "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/" +
      crimeType +
      "/" +
      selectedYear +
      "/" +
      selectedYear +
      "?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("arsonNumber").innerHTML = totalCleared;
        localStorage.setItem("arsonNumber", totalCleared);
      });
    selectedYear++;
    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("arsonNumber+1").innerHTML = totalCleared;
        localStorage.setItem("arsonNumber+1", totalCleared);
      });

    selectedYear--;
    selectedYear--;
    totalCleared = 0;

    if (selectedYear === 1984) {
      document.getElementById("arsonNumber-1").innerHTML = "N/A";
      localStorage.setItem("arsonNumber-1", totalCleared);
    } else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared;
          }
          document.getElementById("arsonNumber-1").innerHTML = totalCleared;
          localStorage.setItem("arsonNumber-1", totalCleared);
        });
    }
  }

  selectedYear = year.options[year.selectedIndex].value;
  selectedCategory = "Assault";

  if (selectedCategory === "Assault") {
    crimeType = "aggravated-assault";
    let crimeApi =
      "https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/" +
      crimeType +
      "/" +
      selectedYear +
      "/" +
      selectedYear +
      "?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("assaultNumber").innerHTML = totalCleared;
        localStorage.setItem("assaultNumber", totalCleared);
      });
    selectedYear++;
    totalCleared = 0;

    fetch(crimeApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        for (let i = 0; i < data.results.length; i++) {
          totalCleared += data.results[i].cleared;
        }
        document.getElementById("assaultNumber+1").innerHTML = totalCleared;
        localStorage.setItem("assaultNumber+1", totalCleared);
      });

    selectedYear--;
    selectedYear--;
    totalCleared = 0;

    if (selectedYear === 1984) {
      document.getElementById("assaultNumber-1").innerHTML = "N/A";
      localStorage.setItem("assaultNumber-1", totalCleared);
    } else {
      fetch(crimeApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // console.log(data)
          for (let i = 0; i < data.results.length; i++) {
            totalCleared += data.results[i].cleared;
          }
          document.getElementById("assaultNumber-1").innerHTML = totalCleared;
          localStorage.setItem("assaultNumber-1", totalCleared);
          console.log(totalCleared)
        });
    }
  }


  // variable for crime data for selected year = crimeNumber

  // variable for crime data for prior year = crimeNumberPrior
  // variable for crime data for following year = crimeNumberFollowing

  //// fetch 2 - Spotify
  //// immediately follows fetch 1 setting variable crimeNumber and also gets selectedCategory

  //// use selectedCategory and totalCleared to establish band name and song number ------------------------

  let keyword = localStorage.getItem("category");
  // let crimeValue = ""

  // console.log(crimeValue);

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=" +
    keyword +
    "&type=tracks&offset=0&limit=100&numberOfTopResults=5",
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

      //if statement

      let crimeValue;

      if (selectedCategory === "Murder") {
        crimeValue = document.getElementById("murderNumber").value;
      } else if (selectedCategory === "Robbery") {
        crimeValue = document.getElementById("robberyNumber").value;
      } else if (selectedCategory === "Grand Theft Auto") {
        crimeValue - document.getElementById("gtaNumber").value;
      } else if (selectedCategory === "Arson") {
        crimeValue = document.getElementById("arsonNumber").value;
      } else if (selectedCategory === "Assault") {
        crimeValue = document.getElementById("assaultNumber").value;
      }
      console.log(crimeValue);
      //random method trigger after seach function ------------------------

      // does x = crimeNumber? ------------------------

      let x = Math.floor(Math.random() * 100);
      console.log(x);

      //or use x = # of incident ------------------------

      //calling var for output of a song
      let songName = data.tracks.items[x].data.name;
      let artistName = data.tracks.items[x].data.artists.items[0].profile.name;
      let albumImg =
        data.tracks.items[x].data.albumOfTrack.coverArt.sources[0].url;
      let albumName = data.tracks.items[x].data.albumOfTrack.name;
      let codeSong = data.tracks.items[x].data.albumOfTrack.id;
      let songLink =
        data.tracks.items[x].data.albumOfTrack.sharingInfo.shareUrl;

      //song player on page
      const musicBox = `<iframe
              src="https://open.spotify.com/embed/album/${codeSong}?utm_source=generator"
              width="100%"
              height="80"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>`;

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

      localStorage.setItem("songTitle", songName)
      localStorage.setItem("bandName", artistName)
      localStorage.setItem("art", albumImg)
      localStorage.setItem("albumTitle", albumName)
      localStorage.setItem("frame", musicBox)

      // render to page
      document.getElementById("songTitle").innerHTML = songName;
      document.getElementById("bandName").innerHTML = artistName;
      document.getElementById("art").setAttribute("src", albumImg);
      document.getElementById("albumTitle").innerHTML = albumName;
      document.getElementById("frame").innerHTML = musicBox;
      // document.getElementById('spotifyLink').setAttribute('href', songLink)
    });
}
