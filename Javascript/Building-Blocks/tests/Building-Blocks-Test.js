QUnit.test('Block object exists', function(assert) {
    var newObj = new Block([2,4,6]);
    assert.deepEqual(newObj, new Block([2,4,6]), 'Block object exists');
});

QUnit.module('Add methods to Block object', {
    beforeEach : function () {
        this._blockObj = new Block([2,5,6]);
    }
});

QUnit.test('Return width from Block object', function(assert) {
    assert.equal(this._blockObj.getWidth(), 2, 'Width value returned successfully');
});

QUnit.test('Return length from Block object', function(assert) {
   assert.equal(this._blockObj.getLength(), 5, 'Length value returned successfully');
});

QUnit.test('Return height from Block object', function(assert) {
   assert.equal(this._blockObj.getHeight(), 6, 'Height value returned successfully');
});

QUnit.test('Return volume from Block object', function(assert) {
    var actualVolume = 2 * 5 * 6;
   assert.equal(this._blockObj.getVolume(), actualVolume, 'Volume of block returned successfully');
});

QUnit.test('Return surface area from Block object', function(assert) {
    var total = 2 * (2 * 5 + 5 * 6 + 2 * 6);
    assert.equal(this._blockObj.getSurfaceArea(), total, 'Surface area returned correctly');
});