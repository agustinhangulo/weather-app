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
   * @param {Array} locations Array of Location objects from Search API
   */
  renderLocations(locations) {
    // TODO: This should return the location elements so that event listeners
    // can be added?
    const results = document.getElementById('location-results');
    this.clearLocations(); // Clear previous results before entering new ones

    const locationElements = [];
    locations.forEach( (location) => {
      locationElements.push( this.createLocationElement(location));
    });
    console.log(locationElements);

    locationElements.forEach( (locationElement) => {
      results.appendChild(locationElement);
    });
  }

  /**
   * Clears the autocompletion results
   */
  clearLocations() {
    const results = document.getElementById('location-results');
    results.innerHTML = ''; // Clear previous results
  }

  /**
   * Given a location, create an DOM Node for it
   * @param {Location} location A location object obtained from Search API
   * @return {Element} Returns a new DOM node containing location information
   */
  createLocationElement(location) {
    const locElement = document.createElement('div');
    locElement.classList.add('location-result');
    locElement.textContent = `${location.name},\
     ${location.region}, ${location.country}`;
    return locElement;
  }
}

export {View};
