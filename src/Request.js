// Package for HTTP request to get nation data


// Define the base URL for flex when building enpoints.
const baseURL = "https://restcountries.eu/rest/v1/all"

// Test region
const africaRegion = ""



// Generic async request found @ w3school.
function getNationInfo(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        // This means the response is ready from the server.
        // 4 - Response is ready
        if (xmlHttp.readyState === 4) {
            // 200 - Good request
            if (xmlHttp.status === 200) {
                // console.log(xmlHttp.responseText);
                parseJSON(xmlHttp.responseText)
            } else { //There was some issue
                window.alert("HTTP error: " + xmlHttp.status + ". Try reloading the page.")
                console.log()
            }
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

// Wrapper for JSON parsing
function parseJSON(nationResponse) {
    var parsedJSON = JSON.parse(nationResponse)
    console.log(JSON.parse(nationResponse))

    console.log(parsedJSON[0])
    console.log(parsedJSON[0].population)

    var preface = "population: "
    var nation;
    for (nation in parsedJSON) {
        //console.log(JSON.parse(nation))
        //console.log(nation)
        //console.log(preface + nation.population);
    }
}

getNationInfo(baseURL + africaRegion)