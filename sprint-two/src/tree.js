var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  _.extend(newTree, treeMethods);
  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value)
  // if (this.parent === null) {
  child.parent = this;
  this.children.push(child);
// } else {
//   this.children.push(child)
// }
  
  
  // console.log(this.parent, 'this.parent', child, "child")
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
        console.log(this.children[i])
      if(this.children[i].contains(target)) {
        return true;
      }
    };

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//{value: xx addChild: ..  children: [ child ]}