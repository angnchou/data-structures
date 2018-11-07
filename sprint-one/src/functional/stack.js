var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    //increment size inside push since push is what changes the size
    size ++;
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    size --;

    for (var key in storage) {
      var keys = Object.keys(storage);
      var lastKeys = keys.slice(keys.length-1);
      console.log(lastKeys)
      return storage[lastKeys];
      delete storage[lastKeys];
    }
    //lastKeys[lastKeys.length];
    
    
  };

  someInstance.size = function() {
    // if (Object.keys(storage).length === 0) {
    //   return 0;
    // } else {
    //   return Object.keys(storage).length;
    //can just return length like below
    //return Object.keys(storage).length;
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
