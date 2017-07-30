import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('genres/genres-list/new', 'Integration | Component | genres/genres list/new', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{genres/genres-list/new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#genres/genres-list/new}}
      template block text
    {{/genres/genres-list/new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
