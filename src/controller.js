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
              console.log(locations);
              this.view.renderLocations(locations); // Then ender locations
            });
      } else { // If the input is empty, then reflect that in the model
        this.model.locations = [];
        this.view.renderLocations(this.model.locations);
      }
    });

    locationInput.addEventListener('focus', () => {
      this.view.renderLocations(this.model.locations);
    });

    locationInput.addEventListener('blur', () => {
      this.view.clearLocations();
    });
  }
}

export {Controller};
