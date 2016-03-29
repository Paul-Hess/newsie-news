import DS from 'ember-data';

export default DS.Model.extend({
  article: DS.attr(),
  author: DS.attr(),
  headline: DS.attr(),
  photo: DS.attr()
});
