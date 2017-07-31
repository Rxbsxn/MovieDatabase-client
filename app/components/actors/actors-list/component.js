import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),
  collapsed: true,
  sortField: ['firstName'],

  modelSorted: computed.sort('model', 'sortField'),

  model: computed(function() {
    return this.get('store').findAll('actor', { include: 'movies' });
  }),

  actions: {
    removeActor(actor) {
      this.get('store').findRecord('actor', actor.id, { reload: true }).then((genre) => {
        genre.deleteRecord();
        genre.save();
      });
    },

    toggle() {
      this.toggleProperty('collapsed');
    }
  }
});
