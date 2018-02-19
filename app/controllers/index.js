import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    replace(route) {
      this.get('router').transitionTo(route, 1);
    }
  }
});
