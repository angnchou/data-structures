var LinkedList = function() {
  var list = {};
  list.head = null; //{value: 4, next: null}
  list.tail = null; //{value: 4, next: null}

  

  list.addToTail = function(value) {
    //list.tail++;
    var newNode = Node(value); //4
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;//5
      list.head.next = newNode; //{value: 4, next: {value:5, next: null}}
       
    }
    //list.tail = newNode.next //null
    //return list.tail;
 
    
  };

  list.removeHead = function() {
    //console.log(list.head.value);
    console.log(list)
    list.head.next = null;
  };

  list.contains = function(target) {
    
  };

  return list;
};

var Node = function(value) { //4
  var node = {};

  node.value = value; //4
  node.next = null;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
