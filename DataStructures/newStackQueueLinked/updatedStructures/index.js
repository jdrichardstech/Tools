//Stack
class Stack {
  constructor(...items) {
    this.reverse = false;
    this.stack = [...items];
  }

  push(...items) {
    return this.reverse
      ? this.stack.unshift(...items)
      : this.stack.push(...items);
  }

  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop();
  }
}

//Queue

class Queue {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items);
  }

  dequeue() {
    return this.reverse ? this.queue.shift() : this.queue.pop();
  }

  peek() {
    if (this.queue.length !== 0) {
      return this.queue[0];
    } else {
      return 'empty';
    }
  }

  size() {
    return this.queue.length;
  }
}

//Doubly Linked List
class LLNode {
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
  }

  addToHead(value) {
    const node = new LLNode(value, null, this.head);
    if (this.head) this.head.next = node;
    else this.tail = node;
    this.head = node;
  }

  addToTail(value) {
    const node = new LLNode(value, this.tail, null);
    if (this.tail) this.tail.prev = node;
    else this.head = node;
    this.tail = node;
  }

  removeHead() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.prev;
    if (this.head) this.head.next = null;
    else this.tail = null;
    return value;
  }

  removeTail() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.next;
    if (this.tail) this.tail.prev = null;
    else this.head = null;
    return value;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return value;
      current = current.prev;
    }
    return null;
  }

  indexOf(value) {
    const indexes = [];
    let current = this.tail;
    let index = 0;
    while (current) {
      if (current.value === value) indexes.push(index);
      current = current.next;
      index++;
    }
    return indexes;
  }
}

//Hash Table

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Table {
  constructor(size) {
    this.cells = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
    return total % this.cells.length;
  }

  insert(key, value) {
    const hash = this.hash(key);
    if (!this.cells[hash]) {
      this.cells[hash] = new Node(key, value);
    } else if (this.cells[hash].key === key) {
      this.cells[hash].value = value;
    } else {
      let node = this.cells[hash];
      while (node.next) {
        if (node.next.key === key) {
          node.next.value = value;
          return;
        }
        node = node.next;
      }
      node.next = new Node(key, value);
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (!this.cells[hash]) return null;
    else {
      let node = this.cells[hash];
      while (node) {
        if (node.key === key) return node.value;
        node = node.next;
      }
      return null;
    }
  }

  getAll() {
    const table = [];
    for (let i = 0; i < this.cells.length; i++) {
      const cell = [];
      let node = this.cells[i];
      while (node) {
        cell.push(node.value);
        node = node.next;
      }
      table.push(cell);
    }
    return table;
  }
}

//Binary Search Tree Breadth, Depth

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new Tree(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new Tree(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) return true;
    if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  depthFirstTraverse(order, callback) {
    order === 'pre' && callback(this.value);
    this.left && this.left.depthFirstTraverse(order, callback);
    order === 'in' && callback(this.value);
    this.right && this.right.depthFirstTraverse(order, callback);
    order === 'post' && callback(this.value);
  }

  breadthFirstTraverse(callback) {
    const queue = [this];
    while (queue.length) {
      const root = queue.shift();
      callback(root.value);
      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }
  }

  getMinValue() {
    if (this.left) return this.left.getMinValue();
    return this.value;
  }

  getMaxValue() {
    if (this.right) return this.right.getMaxValue();
    return this.value;
  }
}
