/**
 * This model will control the functionality for our weather app (requesting
 * weather information through WeatherAPI, sending data to controller, etc.)
 */
class Model {
  /**
   * Currently, constructor does nothing but behavior encapsulation
   * (subject to change)
   */
  constructor() {

  }

  /**
   * 
   * @param {*} location 
   */
  async requestForecast(location) {
    // TODO: Make location be its name or its lat/lon
    const requestURL = `http://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${location}`;
    const response = await fetch(requestURL);
    const data = await response.json();
    console.log(data);
    return data;
  }

  /**
   * Given an input, request possible matching locations using WeatherAPI's
   * Search/AutocompleteAPI
   * @param {string} input Input from form used to search for possible matching
   *                       locations
   * @return {Array} An array of locations
   */
  async requestLocations(input) {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${input}`);
    const data = await response.json();
    return data;
  }
}

export {Model};
