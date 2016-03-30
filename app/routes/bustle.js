import Ember from 'ember';


// dynamic route
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bustle', params.bustle_id);
  },
});
