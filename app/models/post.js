import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  first: DS.attr('string'),
  last: DS.attr('string'),
  jobTitle: DS.attr('string'),
phone: DS.attr('string'),



});
