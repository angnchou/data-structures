var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  //var obj = {};
  obj.storage = {};
  obj.start = 0;
  obj.end = 0;
  return obj;

};

var queueMethods = {}; //to define queueMethods

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};    

queueMethods.dequeue = function() {
  if (this.end - this.start <= 0) {
    return undefined;
  } 
  var firstValue = this.storage[this.start];
  delete this.storage[this.start++];
  return firstValue;
};

queueMethods.size = function() {
  return this.end - this.start;

};

//attaching methods to the prototype of the constructor -->
//  var Queue = function(){
  // var obj = Object.create(Queue.prototype);
// }
// Queue.prototype.enqueue = function(){};
