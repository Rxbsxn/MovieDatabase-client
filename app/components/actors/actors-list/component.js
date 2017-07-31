import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  store: inject.service(),

  actions: {
    removeActor(actor) {
      this.get('store').findRecord('actor', actor.id, { reload: true }).then((genre) => {
        genre.deleteRecord();
        genre.save();
      });
    }
  }
});
