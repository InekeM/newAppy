import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | clans/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:clans/new');
    assert.ok(controller);
  });
});
