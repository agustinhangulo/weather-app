import {Model} from './model';

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
    this.initLocationAutocomplete();
  }

  /**
   * This inits the autocomplete functionality when entering a location
   */
  initLocationAutocomplete() {
    const locationInput = document.getElementById('location');
    locationInput.addEventListener('input', () => {
      if (locationInput.value.length > 0) {
        // TODO: Limit the # of locations to 5 max
        // NOTE: this returns a promise
        const locations = this.model.requestLocations(locationInput.value);
        console.log(locations);
        // TODO: update view of available locations
      }
    });
  }
}

export {Controller};
