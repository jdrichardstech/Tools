/// reduce creates a new array it has built in argument accumulator, currentValue, indes, array
// reduce also can accept a value as a starting value by placing that value  after the curly brackets
// reduce creates a new Array

const arr = [5, 4, 3, 2, 1];

let newArr = arr.reduce((accum, next) => {
  return accum + next;
}, 200);

console.log(newArr);
// this will equal 215. it starts iterating from 200 then to index 0....

///good way to find multiple copies of the same value in an array
//create an object as the accumulator
// use if...in to check and see if value exists in the obj
// if it does add 1 to the key of that value
//else add the value as the key and set it equal to 1 as the value
// return the accumulator

const arr = [5, 3, 2, 5, 6];

let newObj = arr.reduce(function(accum, elem) {
  if (elem in accum) {
    accum[elem]++;
  } else {
    accum[elem] = 1;
  }

  return accum;
}, {});

console.log(Object.keys(newObj));

///can also be used with strings

// const arr = ['John', 'Mike', 'Steve']

// let newArr = arr.reduce(function(accum, elem){
//   return accum + "\n" + elem
// },"Member List:")

// console.log(newArr)

// create full name:
// let arr1 = [{fn: "John",ln:"Smith"},{fn: "Bill",ln:"Olsen"},{fn: "Wilma",ln:"Rudolph"}]
// function createFullName(arr){
//   return arr.reduce(function(accumulator, element, index){
//     accumulator[index+1] = element.fn + ' ' + element.ln
//     return accumulator
//   },{})
// }

// console.log(createFullName(arr1))
