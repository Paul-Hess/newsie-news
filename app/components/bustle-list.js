import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update1(bustle) {
      var params = {
        headline: this.get("headline"),
        photo: this.get("photo"),
        author: this.get("author"),
        article: this.get("article"),
      };
      console.log(params);
      this.sendAction('update2', bustle, params);
    }
  }
});
