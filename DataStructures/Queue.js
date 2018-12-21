//https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9

//https://www.geeksforgeeks.org/implementation-queue-javascript/
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(el) {
    return this.items.push(el);
  }

  dequeue() {
    if (!isEmpty()) {
      return this.items.shift();
    } else {
      return 'empty';
    }
  }

  peek() {
    if (!isEmpty) {
      return this.items[0];
    } else {
      return 'empty';
    }
  }

  size() {
    return this.items.length;
  }
  isEmpty() {
    return items.length === 0;
  }
}

let q = new Queue();

q.enqueue({ priority: 2, name: 'John' });
q.enqueue({ priority: 1, name: 'Peter' });
console.log('q:', q);
let r = [...q.items, { priority: 1, name: 'Les' }];
console.log('r', r);
