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

  return { root, append };
};

export { linkedList };
