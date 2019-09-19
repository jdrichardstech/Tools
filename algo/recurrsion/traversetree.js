let tree = {
  name: 'John',
  age: 23,
  position: 'manager',
  interests: ['gambling', 'eating', 'ping-pong'],
  books: {
    node: 2,
    react: 3,
    html: 5
  }
};

// result ['John',23,'manager','gambling','eating','ping-pong','node','react','html']

let func = (obj, arr = []) => {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value !== 'object') {
      arr.push(value);
    } else if (Array.isArray(value)) {
      value.map(item => arr.push(item));
    } else {
      func(value, arr);
    }
  }
  return arr;
};

console.log(func(tree));
