// Simple Singly-Linked List implementation

// Create Node constructor
function Node(data) {
  this.data = data,
  this.next = null
}

// Create Linked List constructor
function LinkedList() {
  this._length = 0;
  this.head = null;
}

// 'Add' method.
// Creates a new Node on an existing Linked List and appends it
// to the end of the list.
LinkedList.prototype.add = function(val) {
  // Create a new Node with the passed in value
  // and set the currNode to be equal to the head of the list.
  var node = new Node(val);
  var currNode = this.head;

  // If the list is empty, the node is assigned as the head
  // and the length of the list is increased by one.
  if (!currNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // If the list is not empty, we traverse the list until
  // we arrive at a node that points to null.
  // We then point that node to the new node we created.
  while (currNode.next) {
    currNode = currNode.next;
  }

  currNode.next = node;
  this._length++;
  return node;
}

// 'Remove' method.
// Removes a Node from an existing Linked List given it's
// current known position in the list.
LinkedList.prototype.remove = function(val) {
  // To remove a node we need to traverse the list until
  // we arrive at the given data.
  // We store the node before the targeted node so as to
  // make it point to the node after the targeted node.
  // Example:
  // [1]   ->   [2]   ->   [3]   ->   [4]   ->   [5]
  //         prevNode    currNode
  // prevNode is pointing to [3], we will remove [3]
  // by pointing it to null, then, we will point [2] (prevNode)
  // to [4].
  // This way, [3] gets automatically removed from the list by
  // the Javascript garbage collector as there are no references to it.

  var currNode = this.head;
  var prevNode = this.head;

  while (currNode !== null) {
    if (val == currNode.data) {

      // If the node to be removed is the head
      if (currNode === this.head) {
        this.head = currNode.next;
        this._length--;
        return;
      }

      // If the node to be removed is the tail TODO
      // if (currNode.next === null) {}

      // If the node to be removed is not the first node
      prevNode.next = currNode.next;
      this._length--;
      return;
    }

    prevNode = currNode;
    currNode = currNode.next;
  }

  // If the requested node's data does not exist in the list,
  // the loop will exit without returning and the error will be thrown.
  throw new Error('The requested node could not be found.');
}

// 'Print' method.
// Prints the Linked List nicely with an array-like syntax.
// The node on the left always points to the node on it's right.
LinkedList.prototype.print = function() {
  var currNode = this.head;
  var output = '[';

  while(currNode.next) {
    output += currNode.data + ', ';
    currNode = currNode.next;
  }

  output += currNode.data + ']';
  return output;
}
