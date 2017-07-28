import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  model: computed(function() {
    return this.get('store').findAll('genre');
  })
});
