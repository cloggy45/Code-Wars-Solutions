/*
 In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating,
 so we should be able to create new instances of the Queue.
 */

var Queue = function() {
    // implement your Queue constructor here
    this._queue = [];
};

Queue.prototype.enqueue = function (item) {
    this._queue.push(item);
};