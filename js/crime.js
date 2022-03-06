// Crime Data Explorer API

// let apiKey = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
// let endPoint = "https://crime-data-explorer.fr.cloud.gov/#"

// let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + crimeType + '/' + selectedYear + '/' + selectedYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

//note - produce full table of data for the year, THEN use if statement to pick the needed data

let crimeType

let crimeNumberSingle = () => {

  let category = document.getElementById('catagoryInput');
  let year = document.getElementById('yearInput');

  let selectedCategory = category.options[category.selectedIndex].value;
  let selectedYear = year.options[year.selectedIndex].value;

  //if statements for crime/band selection

  selectedCategory = 'Murder'

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
        document.getElementById('gtaNumber').innerHTML =  totalCleared
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
        document.getElementById('arsonNumber').innerHTML =  totalCleared
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
    
}

// let crimeNumberTable = () => {
//   selectedCategory = 'Murder'
//     crimeNumberSingle()

//   selectedCategory = 'Robbery'
//     crimeNumberSingle()

//   selectedCategory = 'Grand Theft Auto'
//     crimeNumberSingle()

//   selectedCategory = 'Arson'
//     crimeNumberSingle()

//   selectedCategory = 'Assault'
//     crimeNumberSingle()
// }