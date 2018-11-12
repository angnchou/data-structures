


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {start: 0, end: 0};
  //this.storage.size = 0;
};

Queue.prototype.enqueue = function(value) {
    this.storage[this.storage.end] = value;
    this.storage.end ++;
  },

Queue.prototype.dequeue = function() {
    if (this.storage.end - this.storage.start <= 0) {
      return undefined;
    }
 
    var firstValue = this.storage[this.storage.start];
    delete this.storage[this.storage.start];
    this.storage.start ++;
    return firstValue;
  },

Queue.prototype.size = function() {
    return this.storage.end - this.storage.start;
};