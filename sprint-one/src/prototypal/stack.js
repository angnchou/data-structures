var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {count: 0};
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.storage.count] = value;
    this.storage.count ++;
  },

  pop: function() {
    if (this.storage.count <= 0) {
      return undefined;
    }
    this.storage.count --;
    var newestValue = this.storage[this.storage.count];
    delete this.storage[this.storage.count];
    
    return newestValue;

  },

  size: function() {
    return this.storage.count;
  }
};


