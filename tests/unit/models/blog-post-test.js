import { moduleForModel, test } from 'ember-qunit';

moduleForModel('blog-post', 'Unit | Model | blog post', {
  // Specify the other units that are required for this test.
  needs: ['model:comment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});