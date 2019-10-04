// it will just do the shallow copy. A shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. But if any of the fields of the object are references to other objects, just the reference addresses are copied, i.e., only the memory address is copied. Changing such reference field will be reflected in both objects.

let obj = { name: 'Debra', age: '22', salary: '50000' };
let objCopy = { ...obj };
let otherObjCopy = Object.assign({}, obj);
objCopy.age = +objCopy.age;
objCopy.salary = +objCopy.salary;
// console.log(obj);
// console.log(objCopy);
// console.log(otherObjCopy);

// Deep copy using JSON.stringify and JSON.parse
// A deep copy occurs when an object is copied along with the objects to which it refers. This can be done easily by using the combination of JSON.stringify and JSON.parse to create deep copy.

// // In this method we are first JSON.stringify() the json object and again parse it to get json object back. The JSON.parse() method parses a JSON string and constructs the JavaScript value or object described by the string. These new object fields will have their own memory address and will be independent of deeply nested object fields

// let newObj = { car: 'Hondo', year: '2019', color: 'blue' };
// let deepCloner = JSON.parse(JSON.stringify(newObj));
// console.log(newObj);
// console.log(deepCloner);
// newObj.car = 'Toyota';
// deepCloner.color = 'green';
// console.log(newObj);
// console.log(deepCloner);

let num = 'Fdf5f3'.toUpperCase();
let alphaObj = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
let calc = n => {
  console.log(n);
  let firstNum = n[0];
  let secondNum = n[1];
  let newFirstNum = 0;
  let newSecondNum = 0;

  firstNum in alphaObj
    ? (newFirstNum = alphaObj[firstNum] * 16)
    : (newFirstNum = Number(firstNum));
  secondNum in alphaObj
    ? (newSecondNum = alphaObj[secondNum])
    : (newSecondNum = Number(secondNum));

  console.log(`Num 1: ${newFirstNum}`);
  console.log(`Num 2: ${newSecondNum}`);

  return newFirstNum + newSecondNum;
};

// if (alphaObj[firstNum] === true || alphaObj[secondNum] === true) {
//   return console.log('true');
// } else {
//   console.log('number');
//   // return parseInt(n[0] * 16) + Number(n[1]);
// }
let red = num.slice(0, 2);
// let green = calc(num.slice(2, 4));
// let blue = calc(num.slice(4, 6));

console.log(calc(red));
