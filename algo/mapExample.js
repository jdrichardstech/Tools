let array = [1, 2, 4, 5];

let newArray2 = array.map(num => num + 10);
console.log(newArray2);

let newArray = [];
function map(arr) {
  for (i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 10);
  }
  return newArray;
}

map(array);
