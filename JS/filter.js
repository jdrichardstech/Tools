/**
 * Syntax
 * var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 *
 * Parameters:
 * callback
 * Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
 *** element
 **** The current element being processed in the array.
 *** index(Optional)
 **** The index of the current element being processed in the array.
 *** array(Optional)
 **** The array filter was called upon.
 *** thisArg(Optional)
 **** Value to use as this when executing callback.
 *
 * Return value
 * A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 */

let words = ['spray', 'limit', 'elite', 'exuberant', 'distruction', 'present'];

const result = words.filter(word => {
  word.length > 6;
});

console.log('result', result);
