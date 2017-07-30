import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  genres: computed(function() {
    return this.get('store').findAll('genre');
  }),

  actions: {
    submit() {
      let name = this.get('name');
      let revenue = this.get('revenue');
      let genre = this.get('selectedGenre');

      this.get('store').createRecord('movie', { name, revenue, genre }, { reload: true }).save(' ');
    },

    chooseGenre(genre) {
      this.set('selectedGenre', genre);
    }
  }
});
