let arr1 = ['dog','cat','bird','mouse']
let arr2 = ['blue', 'green', 'red', 'orange']
arr1.splice(2,1)
console.log(arr1)

// create two arrays, arr1 and arr2. the first array should contain the strings dog, cat, bird, and mouse
// the second array should contain the strings blue, green, red and orange

//remove item from first index of arr1 and add it to the beginning of arr2
// arr1 = ['cat','bird','mouse']
// arr2 = ['dog','blue', 'green', 'red', 'orange']

//remove item from end of arr2 and add it to the end of arr1
// arr1 = ['cat','bird','mouse','orange']
// arr2 = ['dog','blue', 'green', 'red']

//remove 'bird' from arr1 and console.log arr1
// arr1=['cat','mouse','orange']
// arr2 = ['blue', 'green', 'red', 'orange']

//combine the 2 arrays into another array called arr3 and console.log arr3
// let arr3 =[...arr1, ...arr2]
// ['cat','mouse','orange','blue', 'green', 'red', 'orange']

//take the last three items and place them in a new array called arr4 without removing them from arr3
//console.log both arrays
// let arr4 = arr3.slice(arr3.length-3)
// console.log(arr4)
// console.log(arr3)


//Sort arr3 and console.log it
//Add Black to the end of arr3
//If we sort the array now what do you expect to happen

//--------


let string = 'awesome'

// capitalize first letter of the string and place it in a variable
let x = string.charAt(0).toUpperCase() + string.slice(1)

---------

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 52"


