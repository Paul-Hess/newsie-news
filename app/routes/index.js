import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('bustle');
  },

  actions: {
    savePost3(params) {
      var newArticle = this.store.createRecord('bustle', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
