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

  // variable for user selection for Crime category = selectedCategory
  // variable for user selection for Year - selectedYear

  // code for fetch 1

  // variable for crime data for selected year = crimeNumber

  // variable for crime data for prior year = crimeNumberPrior
  // variable for crime data for following year = crimeNumberFollowing

  //// fetch 2 - Spotify - https://rapidapi.com/Glavier/api/spotify23/
  //// immediately follows fetch 1 setting variable crimeNumber and also gets selectedCategory

  let apiKeySong = "13afb176d0msh1bebd3b48309acfp18e1bbjsn28d023f0b592?
  let endPointSong = "https://spotify23.p.rapidapi.com/search/?q=the%20killers&type=tracks&offset=0&limit=100&numberOfTopResults=5"

  //// code for fetch 2

  //// use selectedCategory to establish band name
  //// use crimeNumber to select song

  //// variable for song name and album - cover art?

  let songName = ""
  let albumName = ""
  let coverArt = "img src=''"

  ////// fetch 3 - MediaWiki - search WikiPedia
  ////// follows fetch 2 setting variable songName
  ////// https://www.mediawiki.org/wiki/API:Main_page

  let endPointWiki = "https://www.mediawiki.org/w/api.php"

  ////// code for fetch 3

  ////// use songName to do a search on Wikipedia

  let ? = "?" // establish variables - types of info we can get

}


