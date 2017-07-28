import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  model: computed(function() {
    return this.get('store').query('genre', { include: 'movies' });
  }),

  actions: {
    removeGenre(genre) {
      this.get('store').destroyRecord(genre);
    }
  }
});
