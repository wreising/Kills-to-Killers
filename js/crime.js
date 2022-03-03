// Crime Data Explorer API

let apiKey = "psLU38DZVp60vWENcvahlA1IOKbuRCSgeL001v1g"
let endPoint = "https://crime-data-explorer.fr.cloud.gov/#"

let crimeApi = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/ca/robbery/2020/2020?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'

fetch(crimeApi)

  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
  })
