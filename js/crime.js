// Crime Data Explorer API

// let apiKey = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
// let endPoint = "https://crime-data-explorer.fr.cloud.gov/#"
let totalCleared = 0
let inputYear = 1978
let inputCrime = 'murder'
// let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + inputCrime + '/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

//if statements for options - link to search button later to confirm crime/year selection

if (document.getElementById('categoryInput').value === 'murderSelect') {
  murderStatFetch()
}
else if (document.getElementById('categoryInput').value === 'robberySelect') {
  robberyStatFetch()
}
else if (document.getElementById('categoryInput').value === 'gtaSelect') {
  gtaStatFetch()
}
else if (document.getElementById('categoryInput').value === 'arsonSelect') {
  arsonStatFetch()
}
else if (document.getElementById('categoryInput').value === 'assaultSelect') {
  assaultStatFetch()
}

//crime functions
  
let murderStatFetch = () => {

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/murder/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      totalCleared += data.results[i].cleared
    }
    console.log(totalCleared)
    return totalCleared
  })
}

let robberyStatFetch = () => {

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/robbery/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      totalCleared += data.results[i].cleared
    }
    console.log(totalCleared)
    return totalCleared
  })
}

let gtaStatFetch = () => {

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/motor-vehicle-theft/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      totalCleared += data.results[i].cleared
    }
    console.log(totalCleared)
    return totalCleared
  })
}

let arsonStatFetch = () => {

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/arson/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      totalCleared += data.results[i].cleared
    }
    console.log(totalCleared)
    return totalCleared
  })
}

let assaultStatFetch = () => {

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/aggravated-assault/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      totalCleared += data.results[i].cleared
    }
    console.log(totalCleared)
    return totalCleared
  })
}
