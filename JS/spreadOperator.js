/*
The spread operator “spreads” the values in an iterable (arrays, strings) across zero or more arguments or elements.
*/

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

// or if you want to add individual indexes an array
let newArr = [...combinedArray, 10, 12, 14];
console.log(newArr);

// spread operator can also be used in a function call

function mySum(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

let arr = [2, 4, 6];

//before we would do
console.log(mySum.apply(null, arr));

//no we can

console.log(mySum(...arr));
