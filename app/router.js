import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('clans', function() {
    this.route('index');
    this.route('new');
    this.route('edit', { path: '/:clan_id/edit' });
  });

  this.route('players');
  this.route('proudclans');
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('proudlist');
  });
});

export default Router;
