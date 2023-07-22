import { node } from "./node.js";

// Linked List factory
const linkedList = () => {
  var root = node();

  // Appends a node to the end of the list.
  const append = (value) => {
    // Create new node.
    const newNode = node(value);

    // If no nodes in list, newNode assign to root's next/
    if (root.next === null) {
      root.next = newNode;
      return;
    }

    // Goes to the end of the list.
    while (root.next !== null) {
      root = root.next;
    }

    // Assigns new node.
    root.next = newNode;
  };

  return { root, append };
};

export { linkedList };
