import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  moviesArray: computed('actor.movies', function() {
    return this.get('actor.movies');
  }),

  actions: {
    remove() {
      this.get('removeActor')(this.get('actor'));
    }
  }
});
