/**
 * The flat() and flatMap() functions are available in Chrome 69 / V8 6.9 so you need Node.js 11.
 * Arr#flat is analogougs to Lodash _.flattenDebth() function. The flat() function takes an array of arrays and 'flattens' the nested arrays into the top-level array
 *
 *
 */

/*

 Examples
 */

let arr = [[1, 3], [3, 4], [4, 5], [76]];

console.log(`arr ${arr.flat()}`);
