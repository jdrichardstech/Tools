//https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
//https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current.next = current;
      }
      current.next = node;
    }
    this.size++;
  }
}

const ll = new LinkedList();

ll.add(3);
console.log(ll);
