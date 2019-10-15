function HashTable() {
  var table = [];
}

var loseloseHashCode = function(key) {
  var hash = 0; //{1}
  for (var i = 0; i < key.length; i++) {
    //{2}
    hash += key.charCodeAt(i); //{3}
  }
  return hash % 37; //{4}
};

HashTable.prototype.put = function(key, value) {
  var position = loseloseHashCode(key); //{5}
  console.log(position + ' - ' + key); //{6}
  HashTable[position] = value; //{7}
};

HashTable.prototype.get = function(key) {
  return HashTable[loseloseHashCode(key)];
};

HashTable.prototype.remove = function(key) {
  HashTable[loseloseHashCode(key)] = undefined;
};

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log * hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
