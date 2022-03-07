# Kills to Killers

#### User input is: 1 of 5 categories of crime, and a year between 1985 and 2010 with the suggestion that the year be the user's birth year. 

*(although some of us were born before 1985, but 1985 is the first year the crime API gives results for)*

On page load, the user will see empty spaces or N/A for table values. After selection of a year and category, those spaces and fields will be populated. If the user reloads the page or comes back to it, their prior selection will be displayed.

The user can reselect years and catagories as many times as they like.

The combination of crime cateogry and year is used to look up the number of such crimes committed in California that year. The API returns the number crimes per county so they APP totals all those values up for a California total.

That number of crimes and the selected category are used to search Spotify for a song by a band based on the crime catogry as listed below. Song, album, and album art are displayed to the user.

---

### Crime => Band

##### Murder - The Killers
##### Robbery - The Police
##### Grand Theft Auto - Motorhead
##### Arson - FireHouse
##### Assault - Knife Party

---

### API used:

#### FBI Crime Data Explorer

    https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/

    API Key = iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv

#### Spotify API through RapidAPI
  
    https://rapidapi.com/Glavier/api/spotify23/

    API Key = 13afb176d0msh1bebd3b48309acfp18e1bbjsn28d023f0b592

---

### Screenshot of the APP

![screenshot of Kills to Killers](misc/Screen%20Shot%202022-03-07.png)