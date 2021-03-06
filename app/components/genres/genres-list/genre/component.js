import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  movies: computed('genre', function() {
    return this.get('genre.movies');
  }),

  actions: {
    remove() {
      this.removeGenre(this.get('genre'));
    }
  },

  removeGenre() {}
});
