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
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;

      // If currentNode is null, return null
      if (currentNode === null) {
        return null;
      }
    }

    return currentNode;
  };

  // Removes the last node of the list.
  const pop = () => {
    var newLastNode = root;

    // Goes to the second last node of the list.
    while (newLastNode.next.next !== null) {
      newLastNode = newLastNode.next;
    }

    // Sets next to null to remove last node.
    newLastNode.next = null;
  };

  // Returns true if list contains given value.
  // Return false otherwise.
  const contains = (value) => {
    var currentNode = root;

    // Goes to the end of the list.
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return true;
      }
    }

    return false;
  };

  // Returns the index of the null containing given value.
  // Returns null otherwise.
  const find = (value) => {
    var currentNode = root;
    var index = 0;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;

      if (currentNode.value === value) {
        return index;
      }

      index += 1;
    }

    return null;
  };

  // Function to print list.
  const toString = () => {
    var printNode = root;
    var printList = "";

    printList = printList.concat("(root) -> ");

    // If next node is not empty, go to it.
    while (printNode.next !== null) {
      printNode = printNode.next;

      printList = printList.concat(`(${printNode.value}) -> `);
    }

    printList = printList.concat("(null)");

    return printList;
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

  return {
    append,
    prepend,
    size,
    printList,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

export { linkedList };
