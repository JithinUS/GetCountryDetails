getCountryName()
function getCountryName() {
    let url = "https://restcountries.eu/rest/v2/all"
    let request1 = new XMLHttpRequest()
    request1.open("get", url)
    request1.send()
    request1.onreadystatechange = () => {
        if (request1.readyState == 4) {
            if (request1.status > 199 && request1.status < 300) {
                let datas = JSON.parse(request1.responseText)
                dropdown(datas)

            }
        }
    }
}
function dropdown(datas) {
    let data = `<option class="option1">${"Select Country Name"}</option>`
    for (let i = 0; i < datas.length; i++) {
        data += ` <option class="option1" value="${datas[i].name}">${datas[i].name}</option>`
    }
    option.innerHTML = data
}


function getCountry() {
    let country_name = option.value
    let url = `https://restcountries.eu/rest/v2/name/${country_name}?fullText=true`
    let request = new XMLHttpRequest()
    request.open("get", url)
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status > 199 && request.status < 300) {
                let country = JSON.parse(request.responseText)
                // console.log(country);
                displayCountry(country)
            }
        }
    }
}
function displayCountry(country) {
    let flag = country[0].flag     //accessing array element
    let country_name = country[0].name
    let population = country[0].population
    let currency_name = country[0].currencies[0].name
    let currency_symbol = country[0].currencies[0].symbol

    let html_data = `<div class="card">
    <img src="${flag}" class="img" alt="...">
    <div class="card-body">
      <h5 class="card-title">${country_name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population : ${population}</li>
      <li class="list-group-item">Currency Name : ${currency_name}</li>
      <li class="list-group-item">Currency Symbol : ${currency_symbol}</li>
    </ul>
    </div>`
    data.innerHTML = html_data
}