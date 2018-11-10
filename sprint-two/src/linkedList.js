var LinkedList = function() {
  var list = {};  // {head: {value: 4, next: B, tail: {value: 7, next: null}}
                      // {head: A, tail:B}
  list.head = null; //{value: 4, next: null}
  list.tail = null; //{value: 4, next: null}

  

  list.addToTail = function(value) {
    //list.tail++;
    var newNode = Node(value); //4
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;//7
      list.head.next = newNode; //{value: 4, next: {value:5, next: null}}
       
    }
    //list.tail = newNode.next //null
    //return list.tail;
 
    
  };

  list.removeHead = function() {
    //console.log(list.head.value);
    // console.log(list)
    //when removing the first node, return current head and reassign list.head to point at second node (node.next)
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    var nextNode = list.head;
    //console.log(list.head.value, list.head.next);
    while (nextNode !== null) { //nextNode.next === null for the last node so while loop wouldn't run for the last node
      if (nextNode.value === target) {
        return true;
      } else {
        // console.log(nextNode, nextNode.next)
        nextNode = nextNode.next;
        
      }
    }
    return false;



//     //node.value = target
    // list.head.value === target  => true 
    
//     for (var key in list.head) {
//       // console.log(list, 'list');
      
//    
//         if (list.head.value === target) {
        
//           return true;
//         } else {
//           nextNode = list.head.next;
//           //console.log(list.head.value, list.head.next)
//           //return list.contains(target);
//         }
//       }

//       return false;
//     }
  };
  return list;
};



var Node = function(value) { //4
  var node = {};

  node.value = value; //4
  node.next = null;
  
  return node;
};

// A = newNode(4) {value: 4, next: null}
// B = newNOde(7) {value: 7, next: null}
/*
 * Complexity: What is the time complexity of the above functions?
 */
