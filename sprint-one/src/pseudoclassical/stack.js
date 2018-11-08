var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = {};
  this.storage = {};
  this.storage.size = 0;
  //console.log(this.storage.size)
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
    this.lastValue = this.storage[this.storage.size];
    delete this.storage[this.storage.size];
    return this.lastValue;
  }
  Stack.prototype.size = function() {
    return this.storage.size;
  }



  var box = new Stack();