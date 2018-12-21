//https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
//https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54

////better version

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToHead(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
    this.size++;
  }

  addToTail(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
    this.size++;
  }
}

let ll = new LinkedList();
// ll.addToHead(2)
// ll.addToHead(200)
// ll.addToHead(112)
ll.addToTail(43);
ll.addToTail(12);
ll.addToTail(1200);
ll.addToHead(22);

console.log(ll);

//////////
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
