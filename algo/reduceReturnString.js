//Write a function that accepts a string as its input, and returns the same string just with duplicate letters removed.
//Use the reduce function
//solution("Mississippi") ==='Misp'

// let string = 'Mississippi';
// function solution_1(str) {
//   str.split('').reduce(function(acc, e) {
//     if (acc.indexOf(e) === -1) acc += e;
//     return acc;
//   });
// }

// function solution_2(str) {
//   return str
//     .split('')
//     .reduce((acc, e) => (acc.indexOf == -1 ? acc + e : acc, ''));
// }

// function solution_3() {
//   return str
//     .split('')
//     .reduce((acc, e) => (acc += acc.indexOf(e) == -1 ? e : ''), '');
// }

///Write a function that accepts a string, and returns how many times a specific character appears, taking case into account.
//solution('Mississippi','i')===4

function solution(str1, str2) {
  return str1.split('').reduce((acc, val, i) => {
    if (i === str2) acc++;
    return acc;
  }, 0);
}

console.log(solution('Mississippi', 'i'));

function solution_2(str1, str2) {
  return str1.split('').reduce((acc, val) => (acc += val === str2 ? 1 : 0));
}

function solution_3() {
  return str1
    .split('')
    .reduce((acc, val) => (val === str2 ? acc + val : acc), '');
}
