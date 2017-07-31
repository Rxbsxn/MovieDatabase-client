import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  genres: computed(function() {
    return this.get('store').findAll('genre');
  }),

  model: computed(function() {
    return this.get('store').query('movie', { include: 'genre' });
  }),

  actions: {
    submit() {
      let name = this.get('name');
      let revenue = this.get('revenue');
      let genre = this.get('genre');

      this.get('store').createRecord('movie', { name, revenue, genre }).save();
      this.get('toggle')();
    },

    chooseGenre(genre) {
      this.set('selectedGenre', genre);
    }
  }
});
