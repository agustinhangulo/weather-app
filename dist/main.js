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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n/**\n * This controller will connect model (which makes API requests) to view (which\n * renders relevant info).\n */\nclass Controller {\n  /**\n   * Currently this constructor does nothing special (yet);\n   */\n  constructor() {\n    this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.Model();\n    this.initLocationAutocomplete();\n  }\n\n  /**\n   * This inits the autocomplete functionality when entering a location\n   */\n  initLocationAutocomplete() {\n    const locationInput = document.getElementById('location');\n    locationInput.addEventListener('input', () => {\n      if (locationInput.value.length > 0) {\n        // TODO: Limit the # of locations to 5 max\n        const locations = this.model.requestLocations(locationInput.value);\n        console.log(locations);\n        // TODO: update view of available locations\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nlet controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.Controller();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\n/**\n * This model will control the functionality for our weather app (requesting\n * weather information through WeatherAPI, sending data to controller, etc.)\n */\nclass Model {\n  /**\n   * Currently, constructor does nothing but behavior encapsulation\n   * (subject to change)\n   */\n  constructor() {\n\n  }\n\n  /**\n   * \n   * @param {*} location \n   */\n  async requestForecast(location) {\n    // TODO: Make location be its name or its lat/lon\n    const requestURL = `http://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${location}`;\n    const response = await fetch(requestURL);\n    const data = await response.json();\n    console.log(data);\n    return data;\n  }\n\n  /**\n   * Given an input, request possible matching locations using WeatherAPI's\n   * Search/AutocompleteAPI\n   * @param {string} input Input from form used to search for possible matching\n   *                       locations\n   * @return {Array} An array of locations\n   */\n  async requestLocations(input) {\n    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${input}`);\n    const data = await response.json();\n    return data;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/model.js?");

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