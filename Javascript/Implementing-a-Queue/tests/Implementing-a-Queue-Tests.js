QUnit.test('Queue object exists', function (assert) {
    var queueObj = new Queue();
    assert.deepEqual(queueObj, new Queue(), "Object is the same")
});

QUnit.module('Enqueue method', {
    beforeEach: function () {
        this._queueObject = new Queue();
    }
});

QUnit.test('Enqueue method adds items to array', function (assert) {
    this._queueObject.enqueue('alpha');
    this._queueObject.enqueue('beta');
    this._queueObject.enqueue('charlie');
    assert.equal(this._queueObject._queue.length, 3, "Queue array contains 3 items");
});