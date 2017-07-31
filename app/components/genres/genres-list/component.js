import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),
  routing: inject.service('-routing'),
  collapsed: true,
  sortField: ['name'],

  modelSorted: computed.sort('model', 'sortField'),

  model: computed('store', function() {
    return this.get('store').findAll('genre', { include: 'movies' });
  }),

  actions: {
    removeGenre(genre) {
      this.get('store').findRecord('genre', genre.id, { reload: true }).then((genre) => {
        genre.deleteRecord();
        genre.save();
      });
    },

    toggle() {
      this.toggleProperty('collapsed');
    },

    toggleAdding() {
      this.toggleProperty('collapsed');
    }
  }
});
