// wirte a function that accepts a string as its input, and returns the same string just with duplicate letter removed
function noRepeat(str) {
  let x = new Set();
  let arr = str.split('').map(item => x.add(item));
  return Array.from(x).join('');
}

noRepeat('Mississippi');
