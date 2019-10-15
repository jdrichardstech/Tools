let myarr = [1, 11, 4, 6];

function len(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(len(myarr));

// console.log(Math.max(...arr))
