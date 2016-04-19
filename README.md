# Simple implementation of a Singly-Linked List in Javascript

This is a simple proof of concept for practicing.
This is how it can be used:
```javascript
// We create a Linked List.
var list = new LinkedList();

// Add some values.
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

// Print to check 'Add' method.
console.log('Starting list:\n', list.print());

// Remove the head and print to check again.
list.remove(10);
console.log('Removed head:\n', list.print());

// Remove a node other than the head and print.
list.remove(30);
console.log('Removed node with data "30":\n', list.print());

// Finally we check the error on trying to remove a
// node that doesn't exist.
// Uncomment below line to throw an error.
// list.remove("this data doesn't exist");
```
