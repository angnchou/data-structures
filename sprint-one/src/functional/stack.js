var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = Object.keys(storage).length;


  // Implement the methods below
  someInstance.push = function(value) {
    //increment size inside push since push is what changes the size
    size ++;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    // if (Object.keys(storage).length === 0) {
    //   return 0;
    // } else {
    //   return Object.keys(storage).length;
    //can just return length like below
    //return Object.keys(storage).length;
    return size;


  };

  return someInstance;
};
