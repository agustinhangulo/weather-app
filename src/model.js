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
    // Stores requested locations to prevent constant requests
    this.locations = [];
  }

  /**
   * Request the current weather from a given location
   * @param {string} location A location of the form: 'city, [region,] country'
   * @return {Current} A Current object w/ weather info from the Realtime API
   */
  async requestForecast(location) {
    const requestURL = `http://api.weatherapi.com/v1/current.json?key=f9fe0c76012946608ac01409231207&q=${location}`;
    const response = await fetch(requestURL);
    const data = await response.json();
    console.log(requestURL);
    console.log(data);
    return data;
  }

  /**
   * Request possible matching locations using WeatherAPI's Search/Autocomplete
   * API on the given input
   * @param {string} input Input from form used to search for possible matching
   *                       locations
   * @return {Location[]} An array of locations
   */
  async requestLocations(input) {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f9fe0c76012946608ac01409231207&q=${input}`);
    const data = await response.json();
    return data;
  }
}

export {Model};
