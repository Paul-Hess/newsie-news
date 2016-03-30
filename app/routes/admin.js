import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('bustle');
  },
  actions: {
    savePost3(params) {
      var newArticle = this.store.createRecord('bustle', params);
      newArticle.save();
    },
    update3(bustle, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          bustle.set(key, params[key]);
        }
      });
      bustle.save();
    },
    delete(bustle) {
      if (confirm('Are you sure you want to delete this rental?')) {
        bustle.destroyRecord();
      }
    }
  }
});
