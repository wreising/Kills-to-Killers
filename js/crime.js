// Crime Data Explorer API

// let apiKey = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
// let endPoint = "https://crime-data-explorer.fr.cloud.gov/#"

let inputYear = 2019
let inputCrime = 'murder'
// let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/' + inputCrime + '/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

//crime functions
  
let murderStatFetch = () => {

let murderApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/homicide/' + inputYear + '/' + inputYear + '?API_KEY=psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g'

fetch(murderApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      let totalClearedMurder = 0
      totalClearedMurder += data.results[i].cleared
    }
    console.log(totalClearedMurder)
    return totalClearedMurder
  })
}

let robberyStatFetch = () => {

let robberyApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/robbery/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(robberyApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      let totalClearedRobbery = 0
      totalClearedRobbery += data.results[i].cleared
    }
    console.log(totalClearedRobbery)
    return totalClearedRobbery
  })
}

let gtaStatFetch = () => {

let gtaApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/motor-vehicle-theft/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(gtaApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      let totalClearedGta = 0
      totalClearedGta += data.results[i].cleared
    }
    console.log(totalClearedGta)
    return totalClearedGta
  })
}

let arsonStatFetch = () => {

let arsonApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/arson/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(arsonApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      let totalClearedArson = 0
      totalClearedArson += data.results[i].cleared
    }
    console.log(totalClearedArson)
    return totalClearedArson
  })
}

let assaultStatFetch = () => {

let assaultApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/aggravated-assault/' + inputYear + '/' + inputYear + '?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(assaultApi)

  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      let totalClearedAssault = 0
      totalClearedAssault += data.results[i].cleared
    }
    console.log(totalClearedAssault)
    return totalClearedAssault
  })
}

let oneYearDataFetch = () => {

  //if statements for crime/band selection

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
}

let threeYearDataFetch = () => {

  //data for one year +/- list

  document.getElementById('murderNumber').innerHTML = murderStatFetch()
  document.getElementById('robberyNumber').innerHTML = robberyStatFetch()
  document.getElementById('gtaNumber').innerHTML = gtaStatFetch()
  document.getElementById('arsonNumber').innerHTML = arsonStatFetch()
  document.getElementById('assaultNumber').innerHTML = assaultStatFetch()

  console.log(assaultStatFetch())

  inputYear++
  document.getElementById('murderNumber+1').innerHTML = murderStatFetch()
  document.getElementById('robberyNumber+1').innerHTML = robberyStatFetch()
  document.getElementById('gtaNumber+1').innerHTML = gtaStatFetch()
  document.getElementById('arsonNumber+1').innerHTML = arsonStatFetch()
  document.getElementById('assaultNumber+1').innerHTML = assaultStatFetch()

  inputYear--
  inputYear--
  document.getElementById('murderNumber-1').innerHTML = murderStatFetch()
  document.getElementById('robberyNumber-1').innerHTML = robberyStatFetch()
  document.getElementById('gtaNumber-1').innerHTML = gtaStatFetch()
  document.getElementById('arsonNumber-1').innerHTML = arsonStatFetch()
  document.getElementById('assaultNumber-1').innerHTML = assaultStatFetch()

  console.log('3 year fetch works')
}

threeYearDataFetch()

assaultStatFetch()