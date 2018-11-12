var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storage.size = 0;

};
  Stack.prototype.push = function(value) {
    this.storage[this.storage.size] = value;
    this.storage.size ++;
  }

  Stack.prototype.pop = function() {
    if (this.storage.size <= 0) {
     return undefined;
    }
    this.storage.size --;
    var lastValue = this.storage[this.storage.size];
    delete this.storage[this.storage.size];
    return lastValue;
  }
  Stack.prototype.size = function() {
    return this.storage.size;
  }



