mocha.setup('bdd');
const { assert } = chai;

//Stacks Tests
describe('Stacks', () => {
  it('Should push items to top of stack', () => {
    const stack = new Stack(4, 5);
    assert.equal(stack.push(1, 2, 3), 5);
    assert.deepEqual(stack.stack, [4, 5, 1, 2, 3]);
  });

  it('Should push items to bottom of stack', () => {
    const stack = new Stack(4, 5);
    stack.reverse = true;
    assert.equal(stack.push(1, 2, 3), 5);
    assert.deepEqual(stack.stack, [1, 2, 3, 4, 5]);
  });

  it('Should pop item from top of stack', () => {
    const stack = new Stack(1, 2, 3);
    assert.equal(stack.pop(), 3);
  });

  it('Should pop item from bottom of stack', () => {
    const stack = new Stack(1, 2, 3);
    stack.reverse = true;
    assert.equal(stack.pop(), 1);
  });
});

//Queues
describe('Queues', () => {
  it('Should enqueue items to the left', () => {
    const queue = new Queue(4, 5);
    assert.equal(queue.enqueue(1, 2, 3), 5);
    assert.deepEqual(queue.queue, [1, 2, 3, 4, 5]);
  });

  it('Should enqueue items to the right', () => {
    const queue = new Queue(4, 5);
    queue.reverse = true;
    assert.equal(queue.enqueue(1, 2, 3), 5);
    assert.deepEqual(queue.queue, [4, 5, 1, 2, 3]);
  });

  it('Should dequeue item from the right', () => {
    const queue = new Queue(1, 2, 3);
    assert.equal(queue.dequeue(), 3);
  });

  it('Should dequeue item from the left', () => {
    const queue = new Queue(1, 2, 3);
    queue.reverse = true;
    assert.equal(queue.dequeue(), 1);
  });
});

//Doubley Linked List Tests

describe('Linked List', () => {
  it('Should add to head', () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next, null);
    assert.equal(list.head.prev.prev.value, 1);
    assert.equal(list.tail.next.next.value, 3);
  });

  it('Should add to tail', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.value, 3);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next, null);
    assert.equal(list.head.prev.prev.value, 3);
    assert.equal(list.tail.next.next.value, 1);
  });

  it('Should remove head', () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.removeHead(), 3);
    assert.equal(list.head.value, 2);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 1);
    assert.equal(list.head.next, null);
    assert.equal(list.removeHead(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, null);
    assert.equal(list.head.prev, null);
    assert.equal(list.head.next, null);
    assert.equal(list.removeHead(), 1);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
  });

  it('Should remove tail', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.removeTail(), 3);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 2);
    assert.equal(list.tail.next.value, 1);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.tail.prev, null);
    assert.equal(list.removeTail(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, null);
    assert.equal(list.head.prev, null);
    assert.equal(list.tail.prev, null);
    assert.equal(list.removeTail(), 1);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
  });

  it('Should search for value', () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.search(1), 1);
    assert.equal(list.search(2), 2);
    assert.equal(list.search(3), 3);
    assert.equal(list.search(4), null);
  });

  it('Should search for indexes of value', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(3);
    list.addToTail(1);
    assert.deepEqual(list.indexOf(1), [0, 4]);
    assert.deepEqual(list.indexOf(2), [3]);
    assert.deepEqual(list.indexOf(3), [1, 2]);
    assert.deepEqual(list.indexOf(4), []);
  });
});

//Hash Table Tests

const table = new Table(5);
table.insert('baa', 1);
table.insert('aba', 2);
table.insert('aba', 3);
table.insert('aac', 4);
table.insert('aac', 5);

describe('Hash Table', () => {
  it('Should implement hash', () => {
    assert.equal(table.hash('abc'), 4);
  });

  it('Should implement insert', () => {
    assert.equal(table.cells[table.hash('baa')].value, 1);
    assert.equal(table.cells[table.hash('aba')].next.value, 3);
    assert.equal(table.cells[table.hash('aac')].value, 5);
  });

  it('Should implement get', () => {
    assert.equal(table.get('baa'), 1);
    assert.equal(table.get('aba'), 3);
    assert.equal(table.get('aac'), 5);
    assert.equal(table.get('abc'), null);
  });

  it('Should implement getAll', () => {
    assert.deepEqual(table.getAll(), [[], [], [1, 3], [5], []]);
  });
});

//Binary Search Tree Tests

const tree = new Tree(5);
for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) tree.insert(value);

/*
5
3 6
1 4 7
2   8
        10
       9  
*/

describe('Binary Search Tree', () => {
  it('Should implement insert', () => {
    assert.equal(tree.value, 5);
    assert.equal(tree.left.value, 3);
    assert.equal(tree.right.value, 6);
    assert.equal(tree.left.left.value, 1);
    assert.equal(tree.right.right.value, 7);
    assert.equal(tree.right.right.right.value, 8);
    assert.equal(tree.left.right.value, 4);
    assert.equal(tree.right.right.right.right.value, 10);
    assert.equal(tree.left.left.right.value, 2);
    assert.equal(tree.right.right.right.right.left.value, 9);
  });

  it('Should implement contains', () => {
    assert.equal(tree.contains(2), true);
    assert.equal(tree.contains(9), true);
    assert.equal(tree.contains(0), false);
    assert.equal(tree.contains(11), false);
  });

  it('Should implement depthFirstTraverse', () => {
    const _pre = [];
    const _in = [];
    const _post = [];
    tree.depthFirstTraverse('pre', value => _pre.push(value));
    tree.depthFirstTraverse('in', value => _in.push(value));
    tree.depthFirstTraverse('post', value => _post.push(value));
    assert.deepEqual(_pre, [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]);
    assert.deepEqual(_in, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(_post, [2, 1, 4, 3, 9, 10, 8, 7, 6, 5]);
  });

  it('Should implement breadthDepthTraverse', () => {
    const result = [];
    tree.breadthFirstTraverse(value => result.push(value));
    assert.deepEqual(result, [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]);
  });

  it('Should implement getMinValue', () => {
    assert.equal(tree.getMinValue(), 1);
  });

  it('Should implement getMaxValue', () => {
    assert.equal(tree.getMaxValue(), 10);
  });
});

mocha.run();
