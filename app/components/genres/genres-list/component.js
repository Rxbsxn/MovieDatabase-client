import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),
  routing: inject.service('-routing'),
  collapsed: true,

  model: computed('store', function() {
    return this.get('store').query('genre', { include: 'movies' });
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
