let set = new Set(),
  key1 = {},
  key2 = {};

set.add(key1);
set.add(key2);

console.log(set); // 2

let set2 = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

let newArr = Array.from(set2);
console.log('new array', newArr);

let set3 = new Set([1, 2]);

set3.forEach(function(value, key, ownerSet) {
  console.log(key + ' ' + value);
  console.log(ownerSet === set3);
});
