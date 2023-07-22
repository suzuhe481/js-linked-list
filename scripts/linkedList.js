import { node } from "./node.js";

// Linked List factory
const linkedList = () => {
  var root = node();

  // Appends a node to the end of the list.
  const append = (value) => {
    // Create new node.
    const newNode = node(value);

    var lastNode = root;

    // If no nodes in list, newNode assign to root's next/
    if (lastNode.next === null) {
      lastNode.next = newNode;
      return;
    }

    // Goes to the end of the list.
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    // Assigns new node.
    lastNode.next = newNode;
  };

  // Prepends node to the start of the list.
  const prepend = (value) => {
    // Create new node.
    const newNode = node(value);

    // NewNode points to root's next.
    newNode.next = root.next;
    // Root's next points to newNode.
    root.next = newNode;
  };

  // Returns the size of the linked list.
  const size = () => {
    var counterNode = root;
    var size = 0;

    // Iterates through list while counting nodes.
    while (counterNode.next !== null) {
      counterNode = counterNode.next;
      size++;
    }

    return size;
  };

  // Returns the first node in the list.
  // Returns null if list is empty.
  const head = () => {
    if (root.next === null) {
      return null;
    } else {
      return root.next;
    }
  };

  // Returns the last node in the list.
  // Returns null if list is empty.
  const tail = () => {
    if (root.next === null) {
      return null;
    }

    var lastNode = root;

    // Goes to the end of the list.
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    return lastNode;
  };

  // Returns the node at the given index.
  // Returns null if index is negative or if index passes size of list.
  const at = (index) => {
    if (index < 0) {
      return null;
    }

    var currentNode = root;
    var counter = 0;

    // Iterates through list while counting nodes.
    while (counter < index) {
      // If currentNode is null, return null
      if (currentNode.value === null) {
        return null;
      }

      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  };

  // Prints the list.
  const printList = () => {
    var printNode = root;

    if (printNode.next === null) {
      console.log("Empty list");
    }

    // If next node is not empty, go to it and print it.
    while (printNode.next !== null) {
      printNode = printNode.next;
      console.log(printNode.value);
    }
  };

  return { append, prepend, size, printList, head, tail, at };
};

export { linkedList };
