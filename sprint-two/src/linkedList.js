var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    //list.tail++;
    var newNode = Node(value);
    list.newNode;
    list.tail = newNode;
    //list.tail = newNode.next //null
    return list.tail;
    
  };

  list.removeHead = function() {
    //console.log(list.head.value);
    list.head = null;
  };

  list.contains = function(target) {
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
