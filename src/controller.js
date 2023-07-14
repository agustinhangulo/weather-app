import {Model} from './model';
import {View} from './view';

/**
 * This controller will connect model (which makes API requests) to view (which
 * renders relevant info).
 */
class Controller {
  /**
   * Currently this constructor does nothing special (yet);
   */
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.initLocationAutocomplete();
  }

  /**
   * This inits the autocomplete functionality when entering a location
   */
  initLocationAutocomplete() {
    const locationInput = document.getElementById('location-input');
    locationInput.addEventListener('input', () => {
      if (locationInput.value.length > 0) { // When there's nonempty input
        this.model.requestLocations(locationInput.value) // Request locatoins
            .then( (locations) => {
              // Store locations (to be rendered later on 'focus')
              this.model.locations = locations;

              // Then render locations
              const locationElements = this.view.renderLocations(locations);
              this.initLocationResults(locationElements);
            });
      } else { // If the input is empty, then reflect that
        this.model.locations = [];
        this.view.clearLocations();
      }
    });

    // When the input is focused, display locations that have previously been
    // requested already
    locationInput.addEventListener('focus', () => {
      const locationElements = this.view.renderLocations(this.model.locations);
      this.initLocationResults(locationElements);
    });

    // When the input is unfocused, stop displaying the locations
    locationInput.addEventListener('blur', () => {
      this.view.clearLocations();
    });
  }

  /**
   * idk
   * @param {Element[]} locationElements Array of location result elements from
   *                                 used for rendering autocompletion results
   */
  initLocationResults(locationElements) {
    const locationInput = document.getElementById('location-input');

    locationElements.forEach( (locElement) => {
      // 'mousedown' event fires before 'blur' event, allowing for us to
      // click on results and do proper functionality.
      // Yes, this sucks, but it's the only hack working right now.
      locElement.addEventListener( 'mousedown', () => {
        locationInput.value = locElement.textContent;
        this.model.requestForecast(locElement.textContent).then( (forecast) => {
          this.view.renderForecast(forecast);
        });
        // TODO: Update view after getting forecast
      });
    });
  }
}

export {Controller};
