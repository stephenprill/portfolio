import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  images: DS.attr('string'),
});
