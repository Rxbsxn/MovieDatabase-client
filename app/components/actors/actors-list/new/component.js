import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  movies: computed(function() {
    return this.get('store').findAll('movie');
  }),

  actions: {
    submit() {
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      let movieList = this.get('selectedMovies');

      this.get('store').createRecord('actor', { firstName, lastName, movies: movieList }).save();
      this.get('toggle')();
    }
  }
});
