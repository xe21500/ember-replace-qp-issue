import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('working', { path: '/working/:id'});
  this.route('broken', { path: '/broken/:id'});
});

export default Router;
