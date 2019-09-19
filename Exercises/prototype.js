Array.prototype.mySolution = function(str) {
  return this.join('')
    .split('')
    .filter(c => c === str).length;
};
let arr45 = [5, 15, 55, '515'];
console.log(arr45.mySolution('5'));
