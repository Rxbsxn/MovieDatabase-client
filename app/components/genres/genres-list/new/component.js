import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  store: inject.service(),
  name: null,

  actions: {
    submit() {
      let name = this.get('name');
      this.get('store').createRecord('genre', { name }, { reload: true })
      .save();
      this.get('toggleAdding')();
    }
  }
});
