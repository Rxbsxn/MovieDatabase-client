import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('actors/actors-list/new', 'Integration | Component | actors/actors list/new', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{actors/actors-list/new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#actors/actors-list/new}}
      template block text
    {{/actors/actors-list/new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
