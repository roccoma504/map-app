// Package for HTTP request to get nation data
import './fixed-data-table.css'
const {
    Table, Column, Cell
} = require('fixed-data-table');

// Constants
// Define the base URL for flex when building enpoints.
const baseURL = "https://restcountries.eu/rest/v1/"

// Variables
// Expandable endpoint variable.
var endpoint = "region/africa"

// Functions
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
                window.alert("HTTP error: " + xmlHttp.status +
                    ". Try reloading the page.")
            }
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

// Wrapper for JSON parsing. We should only get here if we got a valid response
// from the server.
function parseJSON(nationResponse) {
    // Parse the retrieved message.
    const parsedJSON = JSON.parse(nationResponse)

    //# TODO REmove
    /* const preface = "Population of "

    for (var i = 0; i < parsedJSON.length; i++) {
        console.log(preface + parsedJSON[i].name + " " + parsedJSON[i].population)
    }
    */

    // Build out data modal for sorting and display.
    buildModal(parsedJSON)

    // Builds the data modal based on the required data.
    function buildModal(parsedResponse) {
        /* Requirements state we need the following data
        - Name
        - alpha2Code
        - Capital
        - Region
        - Population
        - Area (Squared KM)
        - Number of timezones
        - List of languages spoken 
        - We also need to figure out population density with is people per square km
        */
        const keyArray = ["name", "alpha2Code", "capital", "region", "population", "area", "timezones", "languages", "area"]

        var nationInfoArray = [];

        // Build our modal from the retrieved data and the required info.
        for (var i = 0; i < parsedJSON.length; i++) {
            var nationInfo = {}
            for (var infoKey = 0; infoKey < keyArray.length; infoKey++) {
                nationInfo[keyArray[infoKey]] = parsedResponse[i][keyArray[infoKey]]
            }
            const density = nationInfo["population"] / nationInfo["area"]

            nationInfo["density"] = density
            nationInfoArray.push(nationInfo)
        }
        console.log(nationInfoArray)

        drawTable(nationInfoArray)
    }

}
getNationInfo(baseURL + endpoint)

function drawTable(data) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {

    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = rowData["name"];
    cell2.innerHTML = rowData["population"];
    cell3.innerHTML = rowData["area"];
    cell4.innerHTML = rowData["density"];



}