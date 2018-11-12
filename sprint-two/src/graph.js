

// Instantiate a new graph
var Graph = function() {
  
  this.storage = {};
    // {2:[4, 3], 3: [2], 4: [2] }
    // delete 4
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.storage[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // var keys = Object.keys(this.storage)
  // return keys.includes(node.toString()); -->refactored below
  //or...
  // return !!this.storage[node] //!! turns falseys into false if node is 0
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph by removing the node itself
// remove edges from the node and edges stored in nodes that are connected to the removed node
  //call .removeEdges
Graph.prototype.removeNode = function(node) {
  //this.storage[node].forEach(n => this.removeEdge(node, n));

  var self = this;
  this.storage[node].forEach(function(n) {
    self.removeEdge(node, n);
  })

  // for(var key in this.storage) {
  //   this.removeEdge(node, key);
  // }
  delete this.storage[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
// add edge if edge does not exist
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
//check if edge exists
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode));
    this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode));
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //Object.,keys(this.storage).forEach(cb); or
  for(var key in this.storage) {
    cb(key);  
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


