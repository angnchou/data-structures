class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    // this.storage.size = 0;
    this.storage.start = 0;
    this.storage.end = 0;
  }

  enqueue(value) {
    this.storage[this.storage.end] = value;
    // this.storage.size ++;
    this.storage.end ++;
    //console.log(this.storage.size, 'push');
  }

  dequeue() {
    if (this.storage.end - this.storage.start <= 0) {
      return undefined;
    }
    
    this.storage.size -- ;
    var lastValue = this.storage[this.storage.start];
    delete this.storage[this.storage.start];
    this.storage.start ++;
    return lastValue;
  }

  size() {
    return this.storage.end - this.storage.start;
  }
}


// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
  
//   this.storage = {start: 0, end: 0, size: 0};
//   this.storage.size = 0;
// };

// Queue.prototype.enqueue = function(value) {
//     this.storage[this.storage.end] = value;
//     this.storage.size ++;
//     this.storage.end ++;
//   },

// Queue.prototype.dequeue = function() {
//     if (this.storage.size <= 0) {
//       return undefined;
//     }
 
//     var firstValue = this.storage[this.storage.start];
//     delete this.storage[this.storage.start];
//     this.storage.start ++;
//     this.storage.size --;
//     return firstValue;
//   },

// Queue.prototype.size = function() {
//     return this.storage.size;
// };