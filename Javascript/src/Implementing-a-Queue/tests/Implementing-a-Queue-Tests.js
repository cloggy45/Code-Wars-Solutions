QUnit.module('Queue Object', {
    beforeEach: function () {
        this._queueObject = new Queue();
        this._queueObject.enqueue('alpha'); // First
        this._queueObject.enqueue('beta'); // Second
        this._queueObject.enqueue('charlie'); // Third
    }
});

QUnit.test('Enqueue method adds items to array', function (assert) {

    this._queueObject.enqueue('delta');
    assert.equal(this._queueObject._queue.length, 4, "Sucessfully added elements to queue");
});

QUnit.test('Dequeue method removes element from front of queue', function (assert) {

    var result = this._queueObject.dequeue();
    assert.equal(result, 'alpha', 'Removed first element from queue');
});

QUnit.test('Size method returns size of queue', function (assert) {
    var size = this._queueObject.size();
    assert.equal(size, 3, 'Size method returns correct size: 3');
});

