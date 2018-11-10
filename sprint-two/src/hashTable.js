 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(this._storage)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var data = this._storage.get(index)
  if (data === undefined) {
    this._storage.set(index, [[k, v]]);
  } else if (data[0][0] === k) { //could rewrite to use for loop
    console.log(data[0][0])
    data[0][1] = v
  } else {
    // console.log(data)
    data.push([k, v]);
  }  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var data = this._storage.get(index);
  for (var i = 0; i < data.length; i++) {
    // console.log(data)
    if (data[i][0] === k) {
      return data[i][1];
    }  
  };
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var data = this._storage.get(index);
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === k) {
      return data.splice(i, 1)
    }     
  }
  // this._storage.each(function(item, index, collection) {
  //     // console.log(collection[index])
  //   if (collection[index] !== undefined ){
  //     if(collection[index][0] === k) {
  //       collection.splice(0, 1)
  //       // console.log(collection[index])
  //     }
  //   }
  // });
  // console.log(this._storage.get(index)[0])
  // if (this._storage.get(index)[0] === k) {
    
  // }
  // this._storage.set(index, )

};

// callback(storage[i], i, storage);



/*
 * Complexity: What is the time complexity of the above functions?
 */


