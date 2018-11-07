var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size ++;
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    size --;
    
      for (var key in storage) {
      var keys = Object.keys(storage);
      var firstKey = keys.shift();
 
      var firstValue = storage[firstKey];
      delete storage[firstKey];
      return firstValue;
    }
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;

  };

  return someInstance;
};
