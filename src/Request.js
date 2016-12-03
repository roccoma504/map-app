// Package for HTTP request to get nation data


// Define the base URL for flex when building enpoints.
const baseURL = "https://restcountries.eu/rest/v1/"

// Test region
const africaRegion = "region/africa"


// Generic async request found @ w3school.
function getNationInfo(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        // This means the response is ready from the server.
        // 4 - Response is ready
        if (xmlHttp.readyState === 4) {
            // 200 - Good request
            if (xmlHttp.status === 200) {
                console.log(xmlHttp.responseText);
            } else { //There was some issue
                window.alert("HTTP error: " + xmlHttp.status + ". Try reloading the page.")
                console.log()
            }
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

getNationInfo(baseURL + africaRegion)