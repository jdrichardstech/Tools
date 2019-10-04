function mult(...args) {
  console.log(
    args.reduce((acc, currval) => {
      return acc + currval;
    })
  );
}

let arr = [1, 2, 3, 4, 5, 6, 7];

let arr2 = [55, 66, 77];

console.log(mult(...arr));
console.log(mult(...arr2));
