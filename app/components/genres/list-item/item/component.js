import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  movie: computed('genre', function() {
    return this.get('genre.movies');
  })
});
