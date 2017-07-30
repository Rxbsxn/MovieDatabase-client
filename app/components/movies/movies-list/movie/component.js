import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  genre: computed('movie', function() {
    return this.get('movie.genre');
  }),

  actions: {
    remove() {
      this.get('removeMovie')(this.get('movie'));
    }
  }
});
