import { x } from "./config.js";

const yourKey = x;

var API_KEY = yourKey; // register for a free key at openweathermap.com

// Assign HTML Elements to variables
var searchBtn = document.querySelector("#search-button");
var userInput = document.querySelector("#user-search-input");
var recentSearch = document.querySelector("#recent-search");
// userInput.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     // ------ get user input for city name ------
//     var cityInput = userInput.value.trim().toLowerCase();
//     city = toTitleCase(cityInput);

//     searchCity(city, API_KEY); // search city's current weather and display on html
//     getCityGeo(city, API_KEY); // to get the city's geo latitudes & longitudes
//     saveRecentSearch(city); // to save the recent search to local storage & display under the search box
//   }
// });

// Search city's weather, geo lat and longitude based on user input
// Save the recent search
function search() {
  // Process user input for city
  var cityInput = userInput.value.trim().toLowerCase();
  city = toTitleCase(cityInput);

  searchCity(city, API_KEY); // searchCity() called with city and API_KEY parameters
  getCityGeo(city, API_KEY); // ibid for city's geo latitudes & longitudes
  saveRecentSearch(city); // save cleaned up city input to local storage & display under the searchBtn
}

// Add search() as the event listener for both the click event of the searchBtn element and the keyup event of the userInput element
searchBtn.addEventListener("click", search);
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    search();
  }
});
