class Queue {
  constructor() {
    this.items = [];
  }

  add(el) {
    return this.items.push(el);
  }

  remove() {
    if (!isEmpty()) {
      return this.items.pop();
    } else {
      return 'empty';
    }
  }

  peek() {
    if (!isEmpty) {
      return this.items[this.items.length - 1];
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
