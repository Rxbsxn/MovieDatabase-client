import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  revenue: DS.attr('number'),
});
