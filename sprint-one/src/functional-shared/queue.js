
// var extend = function(obj1, obj2) {
//     for (var key in obj2) {
//       obj1[key] = obj2[key];
//     }
//     return obj1;
// };

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = { start: 0, end: 0, size: 0};
  console.log(someInstance)
  return _.extend(someInstance, queueMethods);


};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.storage.end] = value;
    this.storage.end ++;
    this.storage.size ++;
  },

  dequeue: function() {
    if (this.storage.size <= 0) {
      return undefined;
    }
    var firstValue = this.storage[this.storage.start];
    delete this.storage[this.storage.start];
    this.storage.start ++;
    this.storage.size --;
    console.log(firstValue)
    return firstValue;
  },

  size: function() {
    return this.storage.size;
  }
};


