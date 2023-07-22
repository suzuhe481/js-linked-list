import { node } from "./node.js";

// Linked List factory
const linkedList = () => {
  var root = node();

  return { root, tail };
};

export { linkedList };
