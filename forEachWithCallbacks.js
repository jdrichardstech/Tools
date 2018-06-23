/**
 *
 * forEachWithCallbacks.js
 *
 * forEach function takes an array and a callback. I takes every element in the array and passes it as a parameter in the callback.
 * forEach always returns undefined even if you try to store it in an array
 * you assing set your forEach to an array you have to push values to a new array and return that array
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
