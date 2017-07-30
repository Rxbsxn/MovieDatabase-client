import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  actions: {
    removeMovie(movie) {
      this.get('store').findRecord('movie', movie.id, { reload: true }).then((movie) => {
        movie.deleteRecord();
        movie.save();
      })
    }
  }
});
