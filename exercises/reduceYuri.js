//smaller reduce function
let arr = [3, 5, 6, 7];
let sum2 = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum2);

//longer version
let sum3 = arr.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0);
console.log(sum3);
