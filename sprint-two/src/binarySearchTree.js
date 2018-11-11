var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value

  newTree.left = null; // left, right
  newTree.right = null; 
    
  _.extend(newTree, BSTreeMethods);

  return newTree;
};

var BSTreeMethods = {};

BSTreeMethods.insert = function(value){
//check to see value is less than this value
  if (value === this.value) {
    return
  };

  if (value < this.value) {
//check to see if there is anything in the left branch
    if (this.left === null) {
// if theres not, assign new node to left
      this.left = BinarySearchTree(value)
    } else {
// if there is a current node at left, recurse, through the left
      this.left.insert(value)  
      }
  // if value is greater than current node value 
  } 
  if (value > this.value) {
    //if there is nothing in the right side 
    if (this.right === null) {
    //assign new node to this.rigth
      this.right = BinarySearchTree(value)
    } else {
      //ortherwise call insert on right node
      this.right.insert(value)  
    }
  }
  
};

BSTreeMethods.contains = function(target){
  //if current value equals target, return true
  //if current value < target
    //call .contains with this.left
  //if current value > target
    //call .contains with this.right
  //console.log(this)
  var result = false;
  if (this.value === target) {
    result = true;
  }

  // if target < this.value
  if (this.value < target) {
    if (this.left) {
      this.left.contains(target);
    } else {
      if (this.right) {
        this.right.contains(target)
      }
    }
  }

  return result;
};

BSTreeMethods.depthFirstLog = function(callback){
  

  //start at top, 
    //call the callback with current node
      //if current left has value
        //call depthFirstLog with left value
      //if current left is null
        //check if current right is null
        //if current right has value
          //call depthFristLog with right value

  
  //call callback on current node
  callback(this.value)

  if (this.left !== null ) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
