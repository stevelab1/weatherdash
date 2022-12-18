import { x } from './config.js';

const yourKey = x;

var API_KEY = yourKey; // register for a free key at openweathermap.com

// Assign HTML Elements to variables
var searchBtn = document.querySelector("#search-button");
var userInput = document.querySelector("#user-search-input");
var recentSearch = document.querySelector("#recent-search");

// 'enter' event
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // Get user input: city
    var cityInput = userInput.value.trim().toLowerCase();
    city = toTitleCase(cityInput);

    searchCity(city, API_KEY); // search city's current weather and display on html
    getCityGeo(city, API_KEY); // to get the city's geo latitudes & longitudes
    saveRecentSearch(city); // to save the recent search to local storage & display under the search box
  }
});

