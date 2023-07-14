/**
 * This view will render all relevant information to the user
 */
class View {
  /**
   * This constructor does nothing interesting
   */
  constructor() {
  }

  /**
   * Given a list of locations, render these results in an autocomplete menu
   * under the input bar.
   * @param {Location[]} locations Array of Location objects from Search API
   * @return {Element[]} Array of HTML elements with location info
   */
  renderLocations(locations) {
    const results = document.getElementById('location-results');
    this.clearLocations(); // Clear previous results before entering new ones

    const locationElements = [];
    locations.forEach( (location) => {
      locationElements.push( this.createLocationElement(location));
    });

    locationElements.forEach( (locationElement) => {
      results.appendChild(locationElement);
    });

    return locationElements;
  }

  /**
   * Clears the autocompletion results
   */
  clearLocations() {
    const results = document.getElementById('location-results');
    results.innerHTML = ''; // Clear previous results
  }

  /**
   * Given a location, create an HTML element for it
   * @param {Location} location A location object obtained from Search API
   * @return {Element} Returns a new element containing location information
   */
  createLocationElement(location) {
    const locElement = document.createElement('div');
    locElement.classList.add('location-result');

    // Some locations don't have regions, so only display it if it has one
    locElement.textContent = location.region ?
      `${location.name}, ${location.region}, ${location.country}` :
      `${location.name}, ${location.country}`;

    return locElement;
  }

  /**
   *
   * @param {Current} forecast Object with weather info from Realtime API
   */
  renderForecast(forecast) {
    const forecastElement = document.querySelector('.forecast');
    forecastElement.innerHTML = ''; // Clear previous forecast (or empty msg)

    const locationCont = document.createElement('div'); // Location info
    forecastElement.appendChild(locationCont);

    const city = document.createElement('h2'); // City
    city.setAttribute('id', 'city-name');
    city.textContent = forecast.location.name;
    locationCont.appendChild(city);

    // TODO: What to do if there is no region?
    const regionCountry = document.createElement('h3'); // Region, Country
    regionCountry.setAttribute('id', 'region-country');
    regionCountry.textContent = forecast.location.region ?
      `${forecast.location.region}, ${forecast.location.country}` :
      `${forecast.location.country}`;
    locationCont.appendChild(regionCountry);

    const weatherCont = document.createElement('div'); // Weather info
    weatherCont.classList.add('weather-container');
    forecastElement.appendChild(weatherCont);

    const weatherIcon = document.createElement('img'); // Weather icon
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', `https:${forecast.current.condition.icon}`);
    weatherCont.appendChild(weatherIcon);

    const temperature = document.createElement('div'); // Temperature
    temperature.setAttribute('id', 'temperature');
    temperature.innerHTML = `${forecast.current.temp_f} <sup>°F</sup>`;
    weatherCont.appendChild(temperature);

    const weatherDetails = document.createElement('div'); // Weather details
    weatherDetails.classList.add('weather-details');
    weatherCont.appendChild(weatherDetails);

    const precipitation = document.createElement('p'); // Precipitation
    precipitation.setAttribute('id', 'precipitation');
    precipitation.textContent =
      `Precipitation: ${forecast.current.precip_in} in`;
    weatherDetails.appendChild(precipitation);

    const humidity = document.createElement('p'); // Humidity
    humidity.setAttribute('id', 'humidity');
    humidity.textContent =
      `Humidity: ${forecast.current.humidity}%`;
    weatherDetails.appendChild(humidity);

    const wind = document.createElement('p'); // Wind
    wind.setAttribute('id', 'wind');
    wind.textContent =
      `Wind: ${forecast.current.wind_mph}%`;
    weatherDetails.appendChild(wind);

    const extraDetails = document.createElement('div'); // Extra details
    extraDetails.classList.add('extra-details');
    forecastElement.appendChild(extraDetails);

    const description = document.createElement('p'); // Weather description
    description.setAttribute('id', 'description');
    description.textContent = forecast.current.condition.text;
    extraDetails.appendChild(description);

    const weekday = document.createElement('p'); // Weekday
    weekday.setAttribute('id', 'weekday');
    const date = new Date(forecast.location.localtime);
    weekday.textContent = this.getWeekday(date);
    extraDetails.appendChild(weekday);
  }

  /**
   * Given a date, return the weekday it is on
   * @param {Date} date A date object
   * @return {string} The weekday based on the date
   */
  getWeekday(date) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'][date.getDay()];
  }
}

export {View};
