import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  price: DS.attr('string'),
  name: DS.attr('string'),
  color: DS.attr('string'),
  material: DS.attr('string')


});
