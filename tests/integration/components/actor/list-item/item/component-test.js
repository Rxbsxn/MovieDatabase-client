import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('actor/list-item/item', 'Integration | Component | actor/list item/item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{actor/list-item/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#actor/list-item/item}}
      template block text
    {{/actor/list-item/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
