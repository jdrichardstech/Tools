const data = {
  name: 'sandro',
  age: 30,
  bio: {
    education: 'harvard'
  }
};

// ['sandro',30,'harvard']

function walker(obj, arr = []) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      walker(obj[prop], arr);
    } else {
      arr.push(obj[prop]);
    }
  }
  return arr;
}

walker(data);
