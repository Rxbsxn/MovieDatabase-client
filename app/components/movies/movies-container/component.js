import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  init() {
    this._super(...arguments);
    this.set('model', this.get('store').findAll('movie'));
  }
});
