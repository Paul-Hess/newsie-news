import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost1() {
      var params = {
        headline: this.get("headline"),
        photo: this.get("photo"),
        author: this.get("author"),
        article: this.get("article"),
      };
      this.sendAction('savePost2', params);
    },
  }
});
