class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.size = 0;
  }

  push(value) {
    this.storage[this.storage.size] = value;
    this.storage.size ++;
    console.log(this.storage.size, 'push', this.storage);
  }

  pop() {
    if (this.storage.size <= 0) {
      return undefined;
    }
    
    this.storage.size -- ;
    var lastValue = this.storage[this.storage.size];
    console.log(lastValue, this.storage.size)
    delete this.storage[this.storage.size];
    
    return lastValue;
  }

  size() {
    return this.storage.size;
  }


};

var box = new Stack();