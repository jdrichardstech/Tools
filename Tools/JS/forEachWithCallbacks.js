/**
 *
 * forEachWithCallbacks.js
 *
 * forEach function takes an array and a callback. I takes every element in the array and passes it as a parameter in the callback.
 * forEach does not creeate a new array and it always returns undefined even if you try to store it in an array
 *
 */

// Function before forEach
let arr = ["cat", "dog", "ferret", "turtle", "hamster"];
let newArr = [];

// function noForEach(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] + "s");
//   }
//   return console.log("New Array", newArr);
// }

arr.forEach(function(element, index) {
  newArr.push(element + "s is at index: " + index);
  return;
});
console.log(newArr);
// console.log(forEach(arr));
// function forEach(arr, cb) {}
