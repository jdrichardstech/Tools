// Let's say we want to remove all the negative numbers and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18];
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

let aa = a.flatMap(n => {
  if (n < 0) {
    return [];
  } else if (n % 2 == 0) {
    return [n];
  } else {
    return [n - 1, 1];
  }
});

console.log(aa);

// let aaa = a.flatMap(n => (n < 0 ? [] : n % 2 == 0 ? n : [n - 1, 1]));

// console.log(aaa);
