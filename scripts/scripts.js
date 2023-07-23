import { linkedList } from "./linkedList.js";

var list = linkedList();

console.log("Printing list");
console.log(list.toString()); // (root) -> (null)
console.log("\n");

console.log("Size of list");
console.log(list.size()); // 0
console.log("\n");

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log("Printing list");
console.log(list.toString()); // 1 2 3 4 5
console.log("\n");

console.log("Adding to list");
list.prepend(20);
list.prepend(30);
console.log(list.toString()); // 30 20 1 2 3 4 5
console.log("\n");

console.log("Size of list");
console.log(list.size()); // 7
console.log("\n");

// Head of list
console.log("Head of list");
console.log(list.head()); // { value: 30, next: {...} }
console.log("\n");

// Tail of list
console.log("Tail of list");
console.log(list.tail()); // { value: 5, next: null }
console.log("\n");

// Node at given index
console.log("Node at given index...");
console.log(list.at(3)); // { value: 1, next: {...} }
console.log(list.at(-15)); // null
console.log(list.at(200)); // null
console.log("\n");

// Popping last element from list
console.log("Popping last node from list");
console.log("Printing list");
console.log(list.toString());
list.pop(); //  30 20 1 2 3 4
console.log("Printing list without popped node");
console.log(list.toString());
console.log("\n");

// Does list contain value given?
console.log("List contains?");
console.log(list.contains(20)); // true
console.log(list.contains(44)); // false
console.log("\n");

// Find index of value given
console.log("Index of value given");
console.log(list.find(3)); // 4
console.log(list.find(30)); // 0
console.log(list.find(200)); // null
console.log("\n");

console.log("Printing list");
console.log(list.toString()); //
console.log("\n");

// Insert new node at given index
console.log("Insert new node at given index");
console.log("Printing list");
console.log(list.toString()); // 30 20 1 2 3 4
list.insertAt(10, 2);
console.log("Printing list");
console.log(list.toString()); // 30 20 10 1 2 3 4
list.insertAt(80, 2000); // Out of range
console.log("Printing list");
console.log(list.toString()); // 30 20 10 1 2 3 4
console.log("\n");

// Remove node at given index
console.log("Removing node at given index");
console.log("Printing list");
console.log(list.toString()); // 30 20 10 1 2 3 4
list.removeAt(2);
console.log("Printing list");
console.log(list.toString()); // 30 20 1 2 3 4
list.removeAt(0);
console.log("Printing list");
console.log(list.toString()); // 20 1 2 3 4
