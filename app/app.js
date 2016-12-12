import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-rollup-initializers';
import config from './config/environment';
import router from './router';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  MainRouter: router,
});

loadInitializers(App, config.modulePrefix);

export { config };
export default App;
