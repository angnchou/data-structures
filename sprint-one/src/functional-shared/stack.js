var extend = function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
};

var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

   //var storage = {};
   //storage.count = 0;
  return extend({count: 0}, stackMethods);
};



var stackMethods = {
  push: function(value) {
  //console.log(this, 'push function')
   this[this.count] = value;
   this.count ++;
   // console.log(this)

  },
  size: function() {
    //var size;
    //console.log(this.count, 'size function')
    return this.count;
  },

  pop: function() {
    if (this.count <= 0) {
      return undefined; // guard clause so no delete happens if []
    }
    this.count--;
    var lastValue = this[this.count];
    delete this[this.count];
    return lastValue;    
  }  
};

console.log(typeof Stack.push);
//console.log(obj);



// stackMethods.push = function(value) {
//  storage[count] = value;
//  size ++;
//  count ++;

// }



// stackMethods.pop = function() {
//   size --;
// }


// stackMethods.size = function() {
//   return size;

// }