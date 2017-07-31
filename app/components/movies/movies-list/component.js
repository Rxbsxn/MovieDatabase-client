import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),
  collapsed: true,

  model: computed(function() {
    return this.get('store').query('movie', { include: 'genre' });
  }),

  actions: {
    removeMovie(movie) {
      this.get('store').findRecord('movie', movie.id, { reload: true }).then((movie) => {
        movie.deleteRecord();
        movie.save();
      });
    },

    toggle() {
      this.toggleProperty('collapsed');
    }
  }
});
