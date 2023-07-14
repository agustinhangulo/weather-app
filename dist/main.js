/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n/**\n * This controller will connect model (which makes API requests) to view (which\n * renders relevant info).\n */\nclass Controller {\n  /**\n   * Currently this constructor does nothing special (yet);\n   */\n  constructor() {\n    this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.Model();\n    this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.View();\n    this.initLocationAutocomplete();\n  }\n\n  /**\n   * This inits the autocomplete functionality when entering a location\n   */\n  initLocationAutocomplete() {\n    const locationInput = document.getElementById('location-input');\n    locationInput.addEventListener('input', () => {\n      if (locationInput.value.length > 0) { // When there's nonempty input\n        this.model.requestLocations(locationInput.value) // Request locatoins\n            .then( (locations) => {\n              // Store locations (to be rendered later on 'focus')\n              this.model.locations = locations;\n\n              // Then render locations\n              const locationElements = this.view.renderLocations(locations);\n              this.initLocationResults(locationElements);\n            });\n      } else { // If the input is empty, then reflect that\n        this.model.locations = [];\n        this.view.clearLocations();\n      }\n    });\n\n    // When the input is focused, display locations that have previously been\n    // requested already\n    locationInput.addEventListener('focus', () => {\n      const locationElements = this.view.renderLocations(this.model.locations);\n      this.initLocationResults(locationElements);\n    });\n\n    // When the input is unfocused, stop displaying the locations\n    locationInput.addEventListener('blur', () => {\n      this.view.clearLocations();\n    });\n  }\n\n  /**\n   * idk\n   * @param {Element[]} locationElements Array of location result elements from\n   *                                 used for rendering autocompletion results\n   */\n  initLocationResults(locationElements) {\n    const locationInput = document.getElementById('location-input');\n\n    locationElements.forEach( (locElement) => {\n      // 'mousedown' event fires before 'blur' event, allowing for us to\n      // click on results and do proper functionality.\n      // Yes, this sucks, but it's the only hack working right now.\n      locElement.addEventListener( 'mousedown', () => {\n        locationInput.value = locElement.textContent;\n        this.model.requestForecast(locElement.textContent).then( (forecast) => {\n          this.view.renderForecast(forecast);\n        });\n        // TODO: Update view after getting forecast\n      });\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.Controller();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\n/**\n * This model will control the functionality for our weather app (requesting\n * weather information through WeatherAPI, sending data to controller, etc.)\n */\nclass Model {\n  /**\n   * Currently, constructor does nothing but behavior encapsulation\n   * (subject to change)\n   */\n  constructor() {\n    // Stores requested locations to prevent constant requests\n    this.locations = [];\n  }\n\n  /**\n   * Request the current weather from a given location\n   * @param {string} location A location of the form: 'city, [region,] country'\n   * @return {Current} A Current object w/ weather info from the Realtime API\n   */\n  async requestForecast(location) {\n    const requestURL = `http://api.weatherapi.com/v1/current.json?key=f9fe0c76012946608ac01409231207&q=${location}`;\n    const response = await fetch(requestURL);\n    const data = await response.json();\n    console.log(requestURL);\n    console.log(data);\n    return data;\n  }\n\n  /**\n   * Request possible matching locations using WeatherAPI's Search/Autocomplete\n   * API on the given input\n   * @param {string} input Input from form used to search for possible matching\n   *                       locations\n   * @return {Location[]} An array of locations\n   */\n  async requestLocations(input) {\n    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${input}`);\n    const data = await response.json();\n    return data;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View)\n/* harmony export */ });\n/**\n * This view will render all relevant information to the user\n */\nclass View {\n  /**\n   * This constructor does nothing interesting\n   */\n  constructor() {\n  }\n\n  /**\n   * Given a list of locations, render these results in an autocomplete menu\n   * under the input bar.\n   * @param {Location[]} locations Array of Location objects from Search API\n   * @return {Element[]} Array of HTML elements with location info\n   */\n  renderLocations(locations) {\n    const results = document.getElementById('location-results');\n    this.clearLocations(); // Clear previous results before entering new ones\n\n    const locationElements = [];\n    locations.forEach( (location) => {\n      locationElements.push( this.createLocationElement(location));\n    });\n\n    locationElements.forEach( (locationElement) => {\n      results.appendChild(locationElement);\n    });\n\n    return locationElements;\n  }\n\n  /**\n   * Clears the autocompletion results\n   */\n  clearLocations() {\n    const results = document.getElementById('location-results');\n    results.innerHTML = ''; // Clear previous results\n  }\n\n  /**\n   * Given a location, create an HTML element for it\n   * @param {Location} location A location object obtained from Search API\n   * @return {Element} Returns a new element containing location information\n   */\n  createLocationElement(location) {\n    const locElement = document.createElement('div');\n    locElement.classList.add('location-result');\n\n    // Some locations don't have regions, so only display it if it has one\n    locElement.textContent = location.region ?\n      `${location.name}, ${location.region}, ${location.country}` :\n      `${location.name}, ${location.country}`;\n\n    return locElement;\n  }\n\n  /**\n   *\n   * @param {Current} forecast Object with weather info from Realtime API\n   */\n  renderForecast(forecast) {\n    const forecastElement = document.querySelector('.forecast');\n    forecastElement.innerHTML = ''; // Clear previous forecast (or empty msg)\n\n    const locationCont = document.createElement('div'); // Location info\n    forecastElement.appendChild(locationCont);\n\n    const city = document.createElement('h2'); // City\n    city.setAttribute('id', 'city-name');\n    city.textContent = forecast.location.name;\n    locationCont.appendChild(city);\n\n    // TODO: What to do if there is no region?\n    const regionCountry = document.createElement('h3'); // Region, Country\n    regionCountry.setAttribute('id', 'region-country');\n    regionCountry.textContent = forecast.location.region ?\n      `${forecast.location.region}, ${forecast.location.country}` :\n      `${forecast.location.country}`;\n    locationCont.appendChild(regionCountry);\n\n    const weatherCont = document.createElement('div'); // Weather info\n    weatherCont.classList.add('weather-container');\n    forecastElement.appendChild(weatherCont);\n\n    const weatherIcon = document.createElement('img'); // Weather icon\n    weatherIcon.setAttribute('id', 'weather-icon');\n    weatherIcon.setAttribute('src', `https:${forecast.current.condition.icon}`);\n    weatherCont.appendChild(weatherIcon);\n\n    const temperature = document.createElement('div'); // Temperature\n    temperature.setAttribute('id', 'temperature');\n    temperature.innerHTML = `${forecast.current.temp_f} <sup>°F</sup>`;\n    weatherCont.appendChild(temperature);\n\n    const weatherDetails = document.createElement('div'); // Weather details\n    weatherDetails.classList.add('weather-details');\n    weatherCont.appendChild(weatherDetails);\n\n    const precipitation = document.createElement('p'); // Precipitation\n    precipitation.setAttribute('id', 'precipitation');\n    precipitation.textContent =\n      `Precipitation: ${forecast.current.precip_in} in`;\n    weatherDetails.appendChild(precipitation);\n\n    const humidity = document.createElement('p'); // Humidity\n    humidity.setAttribute('id', 'humidity');\n    humidity.textContent =\n      `Humidity: ${forecast.current.humidity}%`;\n    weatherDetails.appendChild(humidity);\n\n    const wind = document.createElement('p'); // Wind\n    wind.setAttribute('id', 'wind');\n    wind.textContent =\n      `Wind: ${forecast.current.wind_mph}%`;\n    weatherDetails.appendChild(wind);\n\n    const extraDetails = document.createElement('div'); // Extra details\n    extraDetails.classList.add('extra-details');\n    forecastElement.appendChild(extraDetails);\n\n    const description = document.createElement('p'); // Weather description\n    description.setAttribute('id', 'description');\n    description.textContent = forecast.current.condition.text;\n    extraDetails.appendChild(description);\n\n    const weekday = document.createElement('p'); // Weekday\n    weekday.setAttribute('id', 'weekday');\n    const date = new Date(forecast.location.localtime);\n    weekday.textContent = this.getWeekday(date);\n    extraDetails.appendChild(weekday);\n  }\n\n  /**\n   * Given a date, return the weekday it is on\n   * @param {Date} date A date object\n   * @return {string} The weekday based on the date\n   */\n  getWeekday(date) {\n    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday',\n      'Thursday', 'Friday', 'Saturday'][date.getDay()];\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;